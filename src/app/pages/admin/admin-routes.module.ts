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
import { ClientListComponent } from './subpages/client/client-list/client-list.component';
import { ClientDetailComponent } from './subpages/client/client-detail/client-detail.component';
import { PaymentListComponent } from './subpages/payment-type/payment-list/payment-list.component';
import { PaymentDetailComponent } from './subpages/payment-type/payment-detail/payment-detail.component';
import { OrderListComponent } from './subpages/order/order-list/order-list.component';
import { OrderDetailComponent } from './subpages/order/order-detail/order-detail.component';

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
      {
        path: 'clients',
        component: ClientListComponent,
      },
      {
        path: 'clients/form',
        component: ClientDetailComponent,
      },
      {
        path: 'clients/form/:id',
        component: ClientDetailComponent,
      },
      {
        path: 'payment-types',
        component: PaymentListComponent,
      },
      {
        path: 'payment-types/form',
        component: PaymentDetailComponent,
      },

      {
        path: 'payment-types/form/:id',
        component: PaymentDetailComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent
      },
      {
        path: 'orders/form',
        component: OrderDetailComponent
      },
      {
        path: 'orders/form/:id',
        component: OrderDetailComponent
      },
      {
        path: '',
        redirectTo: 'categorys',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutesModule {}
