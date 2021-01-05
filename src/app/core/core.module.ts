import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './services/products/products.component';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
