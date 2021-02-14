import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductComponent} from './components/product/product.component';
import {ProductsComponent} from './components/products/products.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {CartComponent} from './components/cart/cart.component';
import {FooterResponsiveComponent} from './components/footer-responsive/footer-responsive.component';
import {InfoReutilizableFooterComponent} from './components/info-reutilizable-footer/info-reutilizable-footer.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SliderProductsComponent} from './components/slider-products/slider-products.component';
import {HomeTitleComponent} from './components/home-title/home-title.component';
import {SearchBarProductsComponent} from './components/search-bar-products/search-bar-products.component';
import {FormsModule} from '@angular/forms';
import {CirculoIconCardComponent} from './components/circulo-icon-card/circulo-icon-card.component';
// TODO: Put every component on it's own module
// Bec this module can get way too big

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    SpinnerComponent,
    CartComponent,
    FooterResponsiveComponent,
    InfoReutilizableFooterComponent,
    HomePageComponent,
    SliderProductsComponent,
    HomeTitleComponent,
    SearchBarProductsComponent,
    CirculoIconCardComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    SpinnerComponent,
    CartComponent,
    FooterResponsiveComponent,
    InfoReutilizableFooterComponent,
    HomePageComponent,
    SliderProductsComponent,
    HomeTitleComponent,
    SearchBarProductsComponent,
    CirculoIconCardComponent
  ],
})
export class SharedModule {}
