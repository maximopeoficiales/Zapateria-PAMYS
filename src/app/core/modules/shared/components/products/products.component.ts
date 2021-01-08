import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products !:Product [] ;

  constructor(private productservice:ProductsService) 
  {  }

  ngOnInit(): void {
    // this.products = this.productservice.getAllProducts();
   this.fecthProducts(); 
  }
 
clickProduct(id :any){

  }

  fecthProducts(){
    this.products=this.productservice.products;
    // this.productservice.getAllProducts()
    //TODO:SUBSCRIBIRNOS PORQUE ES UN OBSERVABLE PARA OBTENER LAS RESPUESTAS
    // .subscribe(products =>{
    //   this.products=products;
    // })
  }
  

}
