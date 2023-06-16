import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEntityPageRoutingModule } from './register-entity-routing.module';

import { RegisterEntityPage } from './register-entity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEntityPageRoutingModule
  ],
  declarations: [RegisterEntityPage]
})
export class RegisterEntityPageModule {}
