import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEntityPage } from './login-entity.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEntityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEntityPageRoutingModule {}
