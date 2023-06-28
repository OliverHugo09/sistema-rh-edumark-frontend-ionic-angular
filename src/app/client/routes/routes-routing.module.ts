import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectRoutesGuard } from '../../connection/secure/protect-routes.guard';
import { RoutesPage } from './routes.page';

import { RegisterEmployeeComponent } from '../components/register/register-employee/register-employee.component';
import { RegisterEntityComponent } from '../components/register/register-entity/register-entity.component';
import { RegisterCompanyComponent } from '../components/register/register-company/register-company.component';
import { RegisterOrganizationComponent } from '../components/register/register-organization/register-organization.component';
import { LoginEntityComponent } from '../components/login/login-entity/login-entity.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesPage
  },
  { path: 'registrar-empleado', component: RegisterEmployeeComponent },
  { path: 'registrar-entidad', component: RegisterEntityComponent },
  { path: 'registrar-organizacion', component: RegisterOrganizationComponent },
  { path: 'registrar-empresa', component: RegisterCompanyComponent },
  { path: 'login', component: LoginEntityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
