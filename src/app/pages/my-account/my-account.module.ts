import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../core/modules/shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MyAccountRoutingModule} from './my-account-routing.module';
import {MyAccountShowComponent} from './subpages/my-account-show/my-account-show.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {HttpClientModule} from '@angular/common/http';
import { MyAccountEditComponent } from './subpages/my-account-edit/my-account-edit.component';
import { OrderListComponent } from './subpages/orders/order-list/order-list.component';
import { VoucherDetailComponent } from './subpages/voucher/voucher-detail/voucher-detail.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';

@NgModule({
  declarations: [
    MyAccountShowComponent, 
    MyAccountComponent, 
    MyAccountEditComponent,
    MyAccountShowComponent,
    MyAccountComponent,
    OrderListComponent,
    VoucherDetailComponent,
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
})
export class MyAccountModule {}
