/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { CategoryControllerService } from './services/category-controller.service';
import { ClientControllerService } from './services/client-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { ProductControllerService } from './services/product-controller.service';
import { PublicControllerService } from './services/public-controller.service';
import { VendorControllerService } from './services/vendor-controller.service';

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
    BasicErrorControllerService,
    ProductControllerService,
    PublicControllerService,
    VendorControllerService
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
