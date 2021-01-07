import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  //escoja dinamicamente una estrategia de precarga
  imports: [RouterModule.forRoot(routes,{
   preloadingStrategy:PreloadAllModules 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
