import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCompanyComponent } from './register-entity/register-company/register-company.component';
import { RegisterOrganizationComponent } from './register-entity/register-organization/register-organization.component';

@NgModule({
  declarations: [
    RegisterCompanyComponent,
    RegisterOrganizationComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    RegisterCompanyComponent,
    RegisterOrganizationComponent
  ]
})
export class AdminComponentsModule { }