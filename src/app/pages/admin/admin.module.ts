import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryListComponent } from './subpages/category/category-list/category-list.component';
import { CategoryDetailComponent } from './subpages/category/category-detail/category-detail.component';
import { SpinnerComponent } from '../../core/modules/shared/components/spinner/spinner.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { CirculoIconCardComponent } from './components/circulo-icon-card/circulo-icon-card.component';
import { HeaderCustomComponent } from './components/header-custom/header-custom.component';

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
    ],
  },
];

@NgModule({
  declarations: [
    NavComponent,
    ProductFormComponent,
    ProductListComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    CirculoIconCardComponent,
    HeaderCustomComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    FormsModule,
  ],
})
export class AdminModule {}
