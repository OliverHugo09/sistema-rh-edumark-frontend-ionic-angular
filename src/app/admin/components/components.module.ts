import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FullCalendarModule } from '@fullcalendar/angular';

import { QuillModule } from 'ngx-quill';

import { NavbarComponent } from './admin-panel/navbar/navbar.component';
import { SidebarComponent } from './admin-panel/sidebar/sidebar.component';
import { DarkmodeComponent } from './shared/darkmode/darkmode.component';
import { MainComponent } from './admin-panel/main/main.component';

import { PanelComponent } from './admin-company/panel/panel.component';
import { CompanyMainComponent } from './admin-company/company-main/company-main.component';
import { CompanyNavbarComponent } from './admin-company/company-navbar/company-navbar.component';
import { CompanySidebarComponent } from './admin-company/company-sidebar/company-sidebar.component';
import { CompanyAddEmployeeComponent } from './admin-company/company-add-employee/company-add-employee.component';
import { CompanyEditComponent } from './admin-company/company-edit/company-edit.component';
import { CompanyBlogsComponent } from './admin-company/company-blogs/company-blogs.component';
import { CompanyCalendarComponent } from './admin-company/company-calendar/company-calendar.component';

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
    CompanyAddEmployeeComponent,
    CompanyEditComponent,
    CompanyBlogsComponent,
    CompanyCalendarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    IonicModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    FullCalendarModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    DarkmodeComponent,
    MainComponent,
    PanelComponent,
  ],
})
export class AdminComponentsModule {}
