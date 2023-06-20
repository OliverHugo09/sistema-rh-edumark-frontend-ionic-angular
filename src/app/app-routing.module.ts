import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./client/routes/routes.module').then(m => m.RoutesPageModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin/routes/routes.module').then(m => m.RoutesPageModule)
  },
  {
    path: 'empleado',
    loadChildren: () => import('./mobile/routes/routes.module').then(m => m.RoutesPageModule)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
