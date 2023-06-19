import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empleado',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./client/routes/routes.module').then(m => m.RoutesPageModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin/routes/admin-panel/admin-panel.module').then(m => m.AdminPanelPageModule)
  },
  {
    path: 'routes',
    loadChildren: () => import('./client/routes/routes.module').then(m => m.RoutesPageModule)
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
