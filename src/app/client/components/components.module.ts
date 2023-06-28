import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEmployeeComponent } from './register/register-employee/register-employee.component';
import { RegisterEntityComponent } from './register/register-entity/register-entity.component';
import { RegisterOrganizationComponent } from './register/register-organization/register-organization.component';
import { RegisterCompanyComponent } from './register/register-company/register-company.component';

import { LoginEmployeeComponent } from './login/login-employee/login-employee.component';
import { LoginEntityComponent } from './login/login-entity/login-entity.component';

@NgModule({
  declarations: [
    RegisterEmployeeComponent,
    RegisterEntityComponent,
    RegisterOrganizationComponent,
    RegisterCompanyComponent,
    LoginEmployeeComponent,
    LoginEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,


  ],
  exports: [
    LoginEmployeeComponent,
    LoginEntityComponent

  ]
})
export class ClientComponentsModule { }