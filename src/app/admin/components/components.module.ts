import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { IonicModule } from '@ionic/angular';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DarkmodeComponent,
    MainComponent

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
    MainComponent
  ]
})
export class AdminComponentsModule { }