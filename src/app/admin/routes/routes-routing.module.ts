import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesPage } from './routes.page';

import { SidebarComponent } from '../components/admin-panel/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesPage
  },
  { path: 'prueba', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
