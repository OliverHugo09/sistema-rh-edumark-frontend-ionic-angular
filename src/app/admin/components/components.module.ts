import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { IonicModule } from '@ionic/angular';

import { NavbarComponent } from './admin-panel/navbar/navbar.component';
import { SidebarComponent } from './admin-panel/sidebar/sidebar.component';
import { DarkmodeComponent } from './shared/darkmode/darkmode.component';
import { MainComponent } from './admin-panel/main/main.component';

import { PanelComponent } from './admin-company/panel/panel.component';
import { CompanyMainComponent } from './admin-company/company-main/company-main.component';
import { CompanyNavbarComponent } from './admin-company/company-navbar/company-navbar.component';
import { CompanySidebarComponent } from './admin-company/company-sidebar/company-sidebar.component';
import { CompanyAddEmployeeComponent } from './admin-company/company-add-employee/company-add-employee.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DarkmodeComponent,
    MainComponent,
    PanelComponent,
    CompanyMainComponent,
    CompanyNavbarComponent,
    CompanySidebarComponent,
    CompanyAddEmployeeComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    IonicModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    DarkmodeComponent,
    MainComponent,
    PanelComponent,
  ]
})
export class AdminComponentsModule { }