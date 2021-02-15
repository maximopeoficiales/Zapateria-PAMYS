import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {MyAccountShowComponent} from './subpages/my-account-show/my-account-show.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyAccountEditComponent } from './subpages/my-account-edit/my-account-edit.component';
import { OrderListComponent } from './subpages/orders/order-list/order-list.component';
import { VoucherDetailComponent } from './subpages/voucher/voucher-detail/voucher-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: MyAccountShowComponent
      },
      {
        path: 'edit',
        component: MyAccountEditComponent
      },
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
  }  
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {}
