import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

// TODO: Put every component on it's own module
// Bec this module can get way too big

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
