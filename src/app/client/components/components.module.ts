import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmployeeComponent } from './login/login-employee/login-employee.component';

@NgModule({
  declarations: [
    LoginEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    LoginEmployeeComponent
  ]
})
export class ClientComponentsModule { }