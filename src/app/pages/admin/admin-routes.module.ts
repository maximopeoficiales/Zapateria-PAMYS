import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './subpages/category/category-list/category-list.component';
import { CategoryDetailComponent } from './subpages/category/category-detail/category-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorListComponent } from './subpages/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './subpages/vendor/vendor-detail/vendor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'categorys',
        component: CategoryListComponent,
      },
      {
        path: 'categorys/form',
        component: CategoryDetailComponent,
      },
      {
        path: 'categorys/form/:id',
        component: CategoryDetailComponent,
      },
      {
        path: 'vendors',
        component: VendorListComponent,
      },
      {
        path: 'vendors/form',
        component: VendorDetailComponent,
      },
      {
        path: 'vendors/form/:id',
        component: VendorDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutesModule {}
