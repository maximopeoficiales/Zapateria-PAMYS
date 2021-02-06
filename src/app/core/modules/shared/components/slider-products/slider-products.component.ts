import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import Splide from '@splidejs/splide';
// import { PublicControllerService } from 'src/app/core/api/services';
import { Product } from '../../../../api/models/product';

@Component({
  selector: 'app-slider-products',
  templateUrl: './slider-products.component.html',
  styleUrls: ['./slider-products.component.sass'],
})
export class SliderProductsComponent implements OnInit, AfterViewInit {
  id = '';
  @Input() productos: Product[] = [];
  constructor() {
    this.id = 'splide' + this.getRandomArbitrary(1, 99).toFixed();
  }
  // se ejecuta despues de cargar las vistas y subvistas del componente
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    new Splide(`.${this.id}`, {
      cover: true,
      padding: '1rem',
      perPage: 2,
      autoWidth: true,
    }).mount();
  }

  getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
