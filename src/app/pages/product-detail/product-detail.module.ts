import { ProductDetailComponent } from './product-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';

const routes: Routes = [
  {
    path: ':id',
    component: ProductDetailComponent
  }
]

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ]
})
export class ProductDetailModule { }
