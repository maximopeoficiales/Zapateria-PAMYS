import { AdminGuard } from './core/guards/admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { MyAccountGuard } from './core/guards/my-account.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'my-account',
    canActivate: [MyAccountGuard],
    loadChildren: () =>
      import('./pages/my-account/my-account.module').then(
        (m) => m.MyAccountModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./pages/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
];

@NgModule({
  //escoja dinamicamente una estrategia de precarga
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
