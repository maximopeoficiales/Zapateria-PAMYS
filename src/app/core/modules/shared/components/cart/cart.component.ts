import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  dataSource!:MatTableDataSource<{ product: Product, amount: number }> ;
  ngOnInit(): void {

    this.fetchProduct()

    this.total = this.cartservice.getTotal()
    this.dataSource = new MatTableDataSource<{product:Product, amount:number}> (this.products);
  }
  Total(){

    this.total = this.cartservice.getTotal()
  }

  fetchProduct() {
    this.products = this.cartservice.getCart()
  }

  updateTable(){
    this.dataSource = new MatTableDataSource<{product:Product, amount:number}> (this.products);

  }

  delete(product:Product) {
    this.cartservice.removeProduct(product);
    this.updateTable()
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
