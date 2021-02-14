import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/api/models';
import { PublicControllerService } from 'src/app/core/api/services';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-bar-products',
  templateUrl: './search-bar-products.component.html',
  styleUrls: ['./search-bar-products.component.sass'],
})
export class SearchBarProductsComponent implements OnInit {
  urlProduct = environment.url_products_images;
  resultProducts: Product[] = [];
  controladorTiempo: any;
  constructor(private publicService: PublicControllerService) {}
  ngOnInit(): void {}
  buscarPorNombreProduct(event: any): void {
    clearTimeout(this.controladorTiempo);
    this.controladorTiempo = setTimeout(() => {
      const nameProduct = event.target.value;
      if (nameProduct != '') {
        this.publicService
          .getByNameUsingGET1(nameProduct)
          .subscribe((product) => {
            if (product.length == 0) {
              this.resultProducts = [];
            } else {
              this.resultProducts = product;
              console.log(this.resultProducts);
            }
          });
      } else {
        this.resultProducts = [];
      }
    }, 250);
  }
}
