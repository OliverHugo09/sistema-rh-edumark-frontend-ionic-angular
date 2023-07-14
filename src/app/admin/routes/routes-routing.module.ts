import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectRoutesGuard } from '../../connection/secure/protect-routes.guard';
import { RoutesPage } from './routes.page';

import { PanelComponent } from '../components/admin-company/panel/panel.component';
import { CompanyAddEmployeeComponent } from '../components/admin-company/company-add-employee/company-add-employee.component';
import { CompanyEditComponent } from '../components/admin-company/company-edit/company-edit.component';
import { CompanyBlogsComponent } from '../components/admin-company/company-blogs/company-blogs.component';
import { CompanyCalendarComponent } from '../components/admin-company/company-calendar/company-calendar.component';

const routes: Routes = [
  { path: '', component: RoutesPage },
  { path: 'empresa', component: PanelComponent },
  { path: 'empresa-agregar-empleado', component: CompanyAddEmployeeComponent },
  { path: 'empresa-editar', component: CompanyEditComponent },
  { path: 'empresa-blogs', component: CompanyBlogsComponent },
  { path: 'empresa-calendario', component: CompanyCalendarComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
