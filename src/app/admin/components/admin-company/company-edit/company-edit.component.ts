import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Giro } from '../../../../interface/giro';
import { Organization } from '../../../../interface/organization';
import { Company } from '../../../../interface/company';

import { CrudOrganizationService } from '../../../../client/connection/api/crud-organization.service';
import { CrudGiroService } from '../../../../client/connection/api/crud-giro.service';
import { CrudCompanyService } from '../../../../client/connection/api/crud-company.service';

let empresaIdNumerico = localStorage.getItem('empresaId');
let empresaId = parseInt(empresaIdNumerico);

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss'],
})
export class CompanyEditComponent implements OnInit {
  companyForm: FormGroup;

  public getOrganization(organization: Organization): { id: number, nombre: string } {
    const { id, nombre } = organization;
    return { id, nombre };
  }

  typegiro: Giro = {
    id: 0,
    tipo: '',
  }

  company: Company = {
    id: null,
    nombre: '',
    ubicacion: '',
    representante: '',
    telefono: '',
    correo: '',
    rfc: '',
    password: '',
    giroId: 0,
    entidadId: null,
  }

  private subscriptions: Array<Subscription> = [];
  organizations: Organization[];
  giros: Giro[];
  location: any;

  constructor(
    public modalController: ModalController,
    private companyService: CrudCompanyService,
    private giroService: CrudGiroService,
    private organizationService: CrudOrganizationService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.companyForm = new FormGroup({
      entidadId: new FormControl(null),
      nombre: new FormControl(null),
      ubicacion: new FormControl(null),
      giroId: new FormControl(null),
      rfc: new FormControl(null),
      representante: new FormControl(null),
      telefono: new FormControl(null),
      correo: new FormControl(null),
      password: new FormControl(null)
    });

    this.companyService.getCompany(empresaId).subscribe(
      (companyData) => {
        this.company = companyData;
        this.loadCompanyData(); // Llama a una función para cargar los datos en el formulario
      },
      (error) => {
        console.log('Error al obtener los datos de la empresa', error);
      }
    );

    const newOrganizations = this.organizationService.getOrganizations().subscribe(
      next => {
        this.organizations = next;
      }
    );

    const newGiros = this.giroService.getGiros().subscribe(
      next => {
        this.giros = next;
      }
    );
    this.subscriptions.push(newOrganizations, newGiros);
  }

  editCompany(): void {
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }

    const companyData = this.companyForm.value;

    this.companyService.updateCompany(this.company.id, companyData).subscribe(
      () => {
        // Operaciones adicionales después de editar la empresa
        const alert = this.alertController.create({
          header: 'Éxito✔️',
          subHeader: '¡Todo salió bien!',
          message: 'Empresa actualizada con éxito',
          buttons: ['OK'],
        }).then((alert) => {
          alert.present();
        });
      },
      (error) => {
        // Manejo de errores al editar la empresa
        const alert = this.alertController.create({
          header: 'Error❌',
          subHeader: '¡Algo salió mal!',
          message: 'No se pudo actualizar la empresa',
          buttons: ['OK'],
        }).then((alert) => {
          alert.present();
        });
      }
    );
  }


  compareFn(option1: any, option2: any): boolean {
    return option1 === option2 || (option1 === null && option2 === undefined) || (option1 === undefined && option2 === null);
  }

  loadCompanyData() {
    this.companyForm.patchValue({
      entidadId: this.company.entidadId,
      nombre: this.company.nombre,
      ubicacion: this.company.ubicacion,
      giroId: this.company.giroId,
      rfc: this.company.rfc,
      representante: this.company.representante,
      telefono: this.company.telefono,
      correo: this.company.correo,
      password: this.company.password
    });
  }


  ngOnDestroy(): void {
    // Desuscribirse de todas las suscripciones cuando el componente se destruye
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
