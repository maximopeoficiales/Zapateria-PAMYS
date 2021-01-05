import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent,
     BannerComponent],
     exports:[
       HomeComponent,
       BannerComponent
     ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
