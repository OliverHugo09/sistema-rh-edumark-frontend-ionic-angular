import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ConsultingCompanyService } from '../../../admin/connection/api/consulting-company.service';
import { Consulting } from '../../../interface/consulting';
import { Subscription } from 'rxjs';
import { AgregarAsesoriaModalComponent } from './mobile-meets-modal.component';

let empresaIdNumerico = localStorage.getItem('empresaId');
let empresaId = parseInt(empresaIdNumerico);

let entidadIdNumerico = localStorage.getItem('entidadId');
let entidadId = parseInt(entidadIdNumerico);

let usuarioIdNumerico = localStorage.getItem('usuarioId');
let usuarioId = parseInt(usuarioIdNumerico);



@Component({
  selector: 'app-mobile-meets',
  templateUrl: './mobile-meets.component.html',
  styleUrls: ['./mobile-meets.component.scss'],
})
export class MobileMeetsComponent implements OnInit {

  empleadoId: number;

  constructor(
    public modalController: ModalController,
    private service: ConsultingCompanyService,
    private alertController: AlertController,

  ) {
    // Obtener el valor del localStorage y convertirlo a número (si es necesario)
    const empleadoIdString = localStorage.getItem('empleadoId');
    this.empleadoId = Number(empleadoIdString);
  }

  consulting: Consulting = {
    id: null,
    title: '',
    description: '',
    time: '',
    comment: '',
    status: null,
    empresaId: null,
    entidadId: null,
    usuarioId: null,
    empleadoId: null,
  }

  private subscriptions: Array<Subscription> = [];
  consultings: Consulting[];

  ngOnInit() {

    const newUsers = this.service.getConsultings(empresaId).subscribe(
      next => {
        this.consultings = next;
        console.log(this.consultings)
      }
    );

    this.subscriptions.push(newUsers);
  }

  // Función para solicitar una asesoria
  async solicitarAsesoria(usuarioId: number, title: string) {
    // Obtiene el valor del empleadoId desde el localStorage
    const empleadoId = this.empleadoId;

    // Abre el modal y pasa los datos del usuario y el título
    const modal = await this.modalController.create({
      component: AgregarAsesoriaModalComponent,
      componentProps: {
        usuarioId,
        title,
      },
    });

    // Espera a que se cierre el modal
    await modal.present();

    // Obtén los datos del modal cuando se cierre
    const { data } = await modal.onWillDismiss();

    if (data) {
      // Si se obtienen datos del modal, crea la asesoria con el comentario y estado
      const nuevaAsesoria: Consulting = {
        id: null,
        title: data.title,
        description: '', // Puedes dejar la descripción vacía o asignarle algún valor por defecto
        time: '', // Puedes dejar el horario vacío o asignarle algún valor por defecto
        comment: data.comment,
        status: 1, // Asigna el estado "Pendiente" (1 en tu caso)
        empresaId: null,
        entidadId: null,
        usuarioId,
        empleadoId,
      };

      // Llama al servicio para agregar la nueva asesoria
      this.service.addConsulting(nuevaAsesoria).subscribe(
        () => {
          // Operaciones adicionales después de agregar la asesoria (si es necesario)
          // Por ejemplo, mostrar una notificación de éxito
          this.showAlert('¡Asesoría solicitada!', 'Se ha enviado la solicitud de asesoría correctamente. ✔️');
        },
        (error) => {
          // Manejo de errores al agregar la asesoria (si es necesario)
          // Por ejemplo, mostrar una notificación de error
          this.showAlert('Error', 'Ha ocurrido un error al enviar la solicitud de asesoría. Por favor, intenta nuevamente. ❌');
          console.error('Error al agregar la asesoria', error);
        }
      );
    }
  }

  // Función para mostrar un alert con emojis
  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

