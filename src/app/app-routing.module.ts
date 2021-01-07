import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    // redirectTo: '/Home',
    //TODO:CUANDO LA URL ESTE VACIA O EN SECO
    // pathMatch: 'full',
    children: [
      {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
      },
      {
        path: 'Home',
        //TODO:CREAR UN MODULO DINAMICAMENTE
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)//devuelva el home module
        // component: HomeComponent
      },
      {
        path: 'Products',
        // canActivate: [AdminGuard],

        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)

      },
      {
        path: 'Contact',
        //TODO:VA VALIDAR DATOS 
        // canActivate:[AdminGuard],
        loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)
      },


    ],

  },
  {
    path:'Admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
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
