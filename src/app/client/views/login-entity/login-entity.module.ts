import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEntityPageRoutingModule } from './login-entity-routing.module';

import { LoginEntityPage } from './login-entity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEntityPageRoutingModule
  ],
  declarations: [LoginEntityPage]
})
export class LoginEntityPageModule {}
