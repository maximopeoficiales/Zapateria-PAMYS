import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ContactModule } from './contact/contact.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    ProductModule,
    PageNotFoundModule,
    ContactModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
