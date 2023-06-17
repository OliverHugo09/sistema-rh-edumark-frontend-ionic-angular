import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'empleado',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registrar-entidad',
    loadChildren: () => import('./pages/register-entity/register-entity.module').then( m => m.RegisterEntityPageModule)
  },
  {
    path: 'registrar-empleado',
    loadChildren: () => import('./pages/register-employee/register-employee.module').then( m => m.RegisterEmployeePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
