import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-alta-entidad-modal',
    templateUrl: './alta-entidad-modal.component.html',
    styleUrls: ['./alta-entidad-modal.component.scss'],
})
export class AltaEntidadModalComponent implements OnInit {
    @Input() codigoSecreto: string;
    codigoIngresado: string;

    constructor(private modalController: ModalController, private alertController: AlertController, private router: Router) { }

    ngOnInit() { }

    async close() {
        await this.modalController.dismiss();
    }

    async verificarCodigo() {
        if (this.codigoIngresado === this.codigoSecreto) {
            this.close();
            this.router.navigate(['registrar-entidad']);
            await this.modalController.dismiss(true); // Enviamos true al cerrar el modal para indicar que el código es válido
        } else {
            const alert = await this.alertController.create({
                header: 'Error',
                message: 'Código incorrecto, vuelve a intentar',
                buttons: ['OK'],
            });
            await alert.present();
        }
    }
}