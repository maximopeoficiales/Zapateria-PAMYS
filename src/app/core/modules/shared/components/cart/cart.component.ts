import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/core/models/Product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  constructor(private cartservice: CartService) {}

  products!: Array<{ product: Product; amount: number }>;
  total!: number;
  dataSource!: MatTableDataSource<{ product: Product; amount: number }>;

  ngOnInit(): void {
    this.fetchProducts();
    this.total = this.cartservice.getTotal();
    this.dataSource = new MatTableDataSource<{
      product: Product;
      amount: number;
    }>(this.products);
  }

  getTotal() {
    this.total = this.cartservice.getTotal();
  }

  fetchProducts() {
    this.products = this.cartservice.getCart();
  }

  updateTable() {
    this.dataSource = new MatTableDataSource<{
      product: Product;
      amount: number;
    }>(this.products);
    this.getTotal();
  }

  delete(product: Product) {
    this.cartservice.removeProduct(product);
    this.updateTable();
  }

  increase(product: Product) {
    this.cartservice.addItem(product);
    this.updateTable();
  }

  decrease(product: Product) {
    this.cartservice.decreaseItem(product);
    this.updateTable();
  }

  displayedColumns: string[] = [
    'Title',
    'Price',
    'Amount',
    'Actions',
    'Remove',
  ];
}
