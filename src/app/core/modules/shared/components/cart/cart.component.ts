import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  products!: Array<{ product: Product, amount: number }>;
  total!: number;
  dataSource: any;
  ngOnInit(): void {
    this.fetchProduct()
    // console.log(this.products)
    // console.log(this.cartservice.getTotal())
    this.total = this.cartservice.getTotal()
  }
  Total(){

    this.total = this.cartservice.getTotal()
  }

  fetchProduct() {
    this.products = this.cartservice.getCart()
  }

  delete() {
    for (let index = 0; index < this.products.length; index++) {
    this.products.splice(index, 1)
    }
  }

  increase(index: number) {
      this.products[index].amount++
    console.log(this.products)
    return this.Total() 
  }
  decrease( index:number) {
    if(this.products[index].amount != 0){
      this.products[index].amount--
      
    }
    return  this.Total()

  }


  displayedColumns: string[] = ['Title', 'Price', 'Amount', 'Actions', 'Remove'];
}
