import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empleado',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registrar-entidad',
    loadChildren: () => import('./admin/views/register-entity/register-entity.module').then(m => m.RegisterEntityPageModule)
  },
  {
    path: 'registrar-empleado',
    loadChildren: () => import('./home/views/register-employee/register-employee.module').then(m => m.RegisterEmployeePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/views/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin/views/admin-panel/admin-panel.module').then(m => m.AdminPanelPageModule)
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
