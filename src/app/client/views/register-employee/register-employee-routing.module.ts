import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEmployeePage } from './register-employee.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEmployeePageRoutingModule {}
