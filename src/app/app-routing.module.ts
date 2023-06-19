import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empleado',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registrar-entidad',
    loadChildren: () => import('./client/views/register-entity/register-entity.module').then(m => m.RegisterEntityPageModule)
  },
  {
    path: 'registrar-empleado',
    loadChildren: () => import('./client/views/register-employee/register-employee.module').then(m => m.RegisterEmployeePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./client/views/login-employee/login-employee.module').then(m => m.LoginEmployeePageModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin/views/admin-panel/admin-panel.module').then(m => m.AdminPanelPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./client/views/login-entity/login-entity.module').then(m => m.LoginEntityPageModule)
  },
  {
    path: 'login-employee',
    loadChildren: () => import('./client/views/login-employee/login-employee.module').then(m => m.LoginEmployeePageModule)
  },
  {
    path: 'login-entity',
    loadChildren: () => import('./client/views/login-entity/login-entity.module').then(m => m.LoginEntityPageModule)
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
