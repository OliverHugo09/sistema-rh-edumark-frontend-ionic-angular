import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectRoutesGuard } from '../../connection/secure/protect-routes.guard';
import { RoutesPage } from './routes.page';

import { PanelComponent } from '../components/admin-company/panel/panel.component';
import { CompanyAddEmployeeComponent } from '../components/admin-company/company-add-employee/company-add-employee.component';

const routes: Routes = [
  { path: '', component: RoutesPage },
  { path: 'empresa', component: PanelComponent },
  { path: 'empresa-agregar-empleado', component: CompanyAddEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
