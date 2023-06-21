import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { IonicModule } from '@ionic/angular';

import { NavbarComponent } from './admin-panel/navbar/navbar.component';
import { SidebarComponent } from './admin-panel/sidebar/sidebar.component';
import { DarkmodeComponent } from './admin-panel/darkmode/darkmode.component';
import { MainComponent } from './admin-panel/main/main.component';

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