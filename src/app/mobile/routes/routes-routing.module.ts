import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileBlogContentComponent } from '../components/mobile-blog-content/mobile-blog-content.component';
import { MobileEventsComponent } from '../components/mobile-events/mobile-events.component';

import { RoutesPage } from './routes.page';

const routes: Routes = [
  { path: '', component: RoutesPage },
  { path: 'blog/:id', component: MobileBlogContentComponent },
  { path: 'eventos', component: MobileEventsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesPageRoutingModule { }
