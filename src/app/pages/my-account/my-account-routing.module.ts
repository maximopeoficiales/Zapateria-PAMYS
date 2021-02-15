import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {MyAccountShowComponent} from './subpages/my-account-show/my-account-show.component';
import { OrderListComponent } from '../admin/subpages/order/order-list/order-list.component';
import { VoucherDetailComponent } from './subpages/voucher/voucher-detail/voucher-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountShowComponent,
    children: [
      {
        path: 'orders',
        component:  OrderListComponent
      },
      {
        path: 'voucher',
        component:  VoucherDetailComponent
      }
      // {
      //   path: 'vendors',
      //   component: VendorListComponent,
      // },
      // {
      //   path: 'vendors/form',
      //   component: VendorDetailComponent,
      // },
      // {
      //   path: 'vendors/form/:id',
      //   component: VendorDetailComponent,
      // },
      // {
      //   path: '',
      //   redirectTo: 'categorys',
      //   pathMatch: 'full',
      // },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {}
