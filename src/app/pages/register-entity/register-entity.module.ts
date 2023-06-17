import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEntityPageRoutingModule } from './register-entity-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { RegisterEntityPage } from './register-entity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEntityPageRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
  declarations: [RegisterEntityPage],
    exports: [
    ]
})
export class RegisterEntityPageModule {}
