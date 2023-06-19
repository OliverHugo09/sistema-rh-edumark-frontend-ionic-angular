import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEntityPageRoutingModule } from './register-entity-routing.module';

import { AdminComponentsModule } from '../../../admin/components/components.module';

import { RegisterEntityPage } from './register-entity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEntityPageRoutingModule,
    AdminComponentsModule,
    FormsModule,
  ],
  declarations: [RegisterEntityPage],
  exports: [
  ]
})
export class RegisterEntityPageModule { }
