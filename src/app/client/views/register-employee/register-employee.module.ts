import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEmployeePageRoutingModule } from './register-employee-routing.module';

import { RegisterEmployeePage } from './register-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEmployeePageRoutingModule
  ],
  declarations: [RegisterEmployeePage]
})
export class RegisterEmployeePageModule {}
