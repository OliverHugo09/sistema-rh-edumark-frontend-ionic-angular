import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { MobileToolbarComponent } from './mobile-toolbar/mobile-toolbar.component';
import { MobileCarouselComponent } from './mobile-carousel/mobile-carousel.component';


@NgModule({
  declarations: [
    MobileMenuComponent,
    MobileToolbarComponent,
    MobileCarouselComponent


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    MobileMenuComponent,
    MobileToolbarComponent,
    MobileCarouselComponent
  ]
})
export class MobileComponentsModule { }