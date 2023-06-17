import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEntityPage } from './register-entity.page';
import { RegisterCompanyComponent } from '../../components/register-entity/register-company/register-company.component';
import { RegisterOrganizationComponent } from '../../components/register-entity/register-organization/register-organization.component';

const routes: Routes = [
  { path: '', component: RegisterEntityPage},
  { path: 'registrar-empresa', component: RegisterCompanyComponent },
  { path: 'registrar-sindicato', component: RegisterOrganizationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEntityPageRoutingModule {}
