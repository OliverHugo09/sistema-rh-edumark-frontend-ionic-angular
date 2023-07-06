import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Employee } from '../../../../interface/employee';

import { EmployeeCompanyService } from '../../../connection/api/employee-company.service';

let empresaIdNumerico = localStorage.getItem('empresaId');
let empresaId = parseInt(empresaIdNumerico);

let entidadIdNumerico = localStorage.getItem('entidadId')
let entidadId = parseInt(entidadIdNumerico)

@Component({
  selector: 'app-company-add-employee',
  templateUrl: './company-add-employee.component.html',
  styleUrls: ['./company-add-employee.component.scss'],
})
export class CompanyAddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  employee: Employee = {
    id: null,
    nombre: '',
    noColaborador: '',
    correo: '',
    telefono: '',
    departamento: '',
    puesto: '',
    turno: '',
    password: '',
    empresaId: empresaId,
    entidadId: null,
  }

  private subscriptions: Array<Subscription> = [];
  location: any;
  employees: Employee[];

  constructor(
    public modalController: ModalController,
    private service: EmployeeCompanyService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.employeeForm = new FormGroup({
      entidadId: new FormControl(null),
      empresaId: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      noColaborador: new FormControl(null, Validators.required),
      departamento: new FormControl(null, Validators.required,),
      puesto: new FormControl(null, Validators.required),
      turno: new FormControl(null, Validators.required),
      telefono: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\d-]{10,20}$/),
      ]),
      correo: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    const newEmployees = this.service.getEmployees(empresaId).subscribe(
      next => {
        this.employees = next;
        console.log(this.employees)
      }
    );

    this.subscriptions.push(newEmployees);
  }

  addEmployee(): void {
    if (this.employeeForm.invalid) {
      // Verificar si el formulario es inválido y mostrar mensajes de validación si es necesario
      this.employeeForm.markAllAsTouched();
      return;
    }

    const employeeData = this.employeeForm.value;

    this.service.addEmployee(employeeData).subscribe(
      () => {
        // Operaciones adicionales después de agregar la empresa
        const alert = this.alertController.create({
          header: 'Éxito✔️',
          subHeader: '¡Todo salio bien!',
          message: 'Te has registrado con éxito',
          buttons: ['OK'],
        }).then((alert) => {
          alert.present(); // Mostrar el alert {
          this.router.navigate(['']); // Redirigir a la ruta '/login' después de cerrar la alerta
        });
      },
      (error) => {
        // Manejo de errores al agregar la empresa
        const alert = this.alertController.create({
          header: 'Error❌',
          subHeader: '¡Algo salio mal!',
          message: 'No se ha podido completar tu registro',
          buttons: ['OK'],
        }).then((alert) => {
          alert.present(); // Mostrar el alert
        });
      }
    );
  }

  ngOnDestroy(): void {
    // Desuscribirse de todas las suscripciones cuando el componente se destruye
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
