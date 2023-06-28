import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectRoutesGuard } from '../../connection/secure/protect-routes.guard';
import { RoutesPage } from './routes.page';

import { SidebarComponent } from '../components/admin-panel/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesPage
  },
  { path: 'prueba', component: SidebarComponent, canActivateChild: [ProtectRoutesGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
