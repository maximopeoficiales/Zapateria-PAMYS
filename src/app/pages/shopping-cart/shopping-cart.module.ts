import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
  },
];
@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
  ],
})
export class ShoppingCartModule {}
