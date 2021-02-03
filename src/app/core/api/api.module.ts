/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { CategoryControllerService } from './services/category-controller.service';
import { ClientControllerService } from './services/client-controller.service';
import { DocumentTypeControllerService } from './services/document-type-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { OrderControllerService } from './services/order-controller.service';
import { OrdersDetailsControllerService } from './services/orders-details-controller.service';
import { OrderStatusControllerService } from './services/order-status-controller.service';
import { PaymentTypeControllerService } from './services/payment-type-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { ProductImagesControllerService } from './services/product-images-controller.service';
import { PublicControllerService } from './services/public-controller.service';
import { VendorControllerService } from './services/vendor-controller.service';
import { VoucherControllerService } from './services/voucher-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthControllerService,
    CategoryControllerService,
    ClientControllerService,
    DocumentTypeControllerService,
    BasicErrorControllerService,
    OrderControllerService,
    OrdersDetailsControllerService,
    OrderStatusControllerService,
    PaymentTypeControllerService,
    ProductControllerService,
    ProductImagesControllerService,
    PublicControllerService,
    VendorControllerService,
    VoucherControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
