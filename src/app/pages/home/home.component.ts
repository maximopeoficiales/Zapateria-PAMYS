import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  mySwiper!: Swiper;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }
}
