import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEntityPage } from './register-entity.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEntityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEntityPageRoutingModule {}
