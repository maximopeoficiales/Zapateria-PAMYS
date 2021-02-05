import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  mySwiper!: Swiper;
  constructor() {}

  ngOnInit(): void {
    this.cargarSplides();
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
    new Splide('.splide2', {
      cover: true,
      padding: '1rem',
      perPage: 2,
      autoWidth: true,
    }).mount();
    new Splide('.splide3', {
      cover: true,
      padding: '1rem',
      perPage: 2,
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
}
