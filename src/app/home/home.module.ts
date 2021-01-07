import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from './../material/material.module';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    [SwiperModule],
    FormsModule

  ],
})
export class HomeModule { }
