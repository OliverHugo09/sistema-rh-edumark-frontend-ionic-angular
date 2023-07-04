import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectRoutesGuard } from '../../connection/secure/protect-routes.guard';
import { RoutesPage } from './routes.page';

import { PanelComponent } from '../components/admin-company/panel/panel.component';

const routes: Routes = [
  { path: '', component: RoutesPage },
  { path: 'empresa', component: PanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
