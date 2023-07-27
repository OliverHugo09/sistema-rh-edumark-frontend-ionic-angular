import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesPage } from './routes.page';

import { PanelComponent } from '../components/admin-company/panel/panel.component';
import { CompanyAddEmployeeComponent } from '../components/admin-company/company-add-employee/company-add-employee.component';
import { CompanyEditComponent } from '../components/admin-company/company-edit/company-edit.component';
import { CompanyBlogsComponent } from '../components/admin-company/company-blogs/company-blogs.component';
import { CompanyCalendarComponent } from '../components/admin-company/company-calendar/company-calendar.component';
import { CompanyAddBlogComponent } from '../components/admin-company/company-add-blog/company-add-blog.component';
import { CompanyAddUserComponent } from '../components/admin-company/company-add-user/company-add-user.component';
import { CompanyAddConsultingComponent } from '../components/admin-company/company-add-consulting/company-add-consulting.component';

import { AddUserComponent } from '../components/admin-panel/add-user/add-user.component';
import { AddEmployeeComponent } from '../components/admin-panel/add-employee/add-employee.component';
import { EditComponent } from '../components/admin-panel/edit/edit.component';

const routes: Routes = [
  { path: '', component: RoutesPage },
  { path: 'empresa', component: PanelComponent },
  { path: 'empresa-agregar-empleado', component: CompanyAddEmployeeComponent },
  { path: 'empresa-editar', component: CompanyEditComponent },
  { path: 'empresa-blogs', component: CompanyBlogsComponent },
  { path: 'empresa-calendario', component: CompanyCalendarComponent },
  { path: 'empresa-agregar-blog', component: CompanyAddBlogComponent },
  { path: 'empresa-agregar-usuario', component: CompanyAddUserComponent },
  { path: 'empresa-asesoria', component: CompanyAddConsultingComponent },

  { path: 'agregar-usuario', component: AddUserComponent },
  { path: 'agregar-empleado', component: AddEmployeeComponent },
  { path: 'editar', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
