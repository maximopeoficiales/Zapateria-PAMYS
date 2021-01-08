import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [

 
  {
   path:'',
   component:NavComponent,
   children:[
{
   path:'Create',
   component:ProductFormComponent
 },
 {
   path:'Products',
   component:ProductListComponent
 }
   ]
 }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
