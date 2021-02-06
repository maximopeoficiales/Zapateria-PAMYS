import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';
import Splide from '@splidejs/splide';
import { PublicControllerService } from 'src/app/core/api/services';
import { Product } from '../../core/api/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  mySwiper!: Swiper;
  productsDeMuestra: Product[] = [];
  constructor(private service: PublicControllerService) {}

  ngOnInit(): void {
    this.cargarSplides();
    this.cargarProducts();
  }
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container');
    // sliders
  }

  cargarSplides(): void {
    new Splide('.splide-slide', {
      type: 'loop',
      autoplay: true,
      pauseOnHover: false,
      cover: true,
    }).mount();
    new Splide('.splide1', {
      cover: true,
      padding: '1rem',
      perPage: 1,
      arrows: false,
      autoWidth: true,
    }).mount();
    new Splide('.splide4', {
      cover: true,
      padding: '1rem',
      perPage: 2,
      arrows: false,
      autoWidth: true,
    }).mount();
  }
  cargarProducts(): void {
    this.service.getAllUsingGET9().subscribe((products) => {
      console.log(products);

      this.productsDeMuestra = products;
    });
  }
}
