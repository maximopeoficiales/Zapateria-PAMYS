import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productservice:ProductsService) 
  { 
    this.products = this.productservice.getAllProducts();
  }

  ngOnInit(): void {
    // this.products = this.productservice.getAllProducts();   
  }
 
  // clickProduct(id: number){

  // }

  fecthProducts(){
    // this.products=this.productservice.products;
    // this.productservice.getAllProducts()
    //TODO:SUBSCRIBIRNOS PORQUE ES UN OBSERVABLE PARA OBTENER LAS RESPUESTAS
    // .subscribe(products =>{
    //   this.products=products;
    // })
  }
  

}
