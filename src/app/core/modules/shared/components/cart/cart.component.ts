import {Component, OnInit} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Product} from 'src/app/core/api/models/product';
import {CartService} from 'src/app/core/services/cart/cart.service';
import {SwalAlerts} from '../../swalAlerts/SwalAlerts';
import {TypeMessageSwal} from '../../swalAlerts/TypeMessageSwal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  products!: Array<{product: Product; amount: number}>;
  total!: number;
  dataSource!: MatTableDataSource<{product: Product; amount: number}>;
  swal: SwalAlerts = new SwalAlerts();

  ngOnInit(): void {
    this.fetchProducts();
    this.total = this.cartService.getTotal();
    this.dataSource = new MatTableDataSource<{
      product: Product;
      amount: number;
    }>(this.products);
  }

  getTotal() {
    this.total = this.cartService.getTotal();
  }

  fetchProducts() {
    this.products = this.cartService.getCart();
  }

  updateTable() {
    this.dataSource = new MatTableDataSource<{
      product: Product;
      amount: number;
    }>(this.products);
    this.getTotal();
  }

  delete(product: Product) {
    this.cartService.removeProduct(product);
    this.updateTable();
  }

  increase(product: Product) {
    let thisProduct = this.products.find(p => p.product.idProduct == product.idProduct);
    if (thisProduct?.amount! >= product.stock!) {
      this.swal.showMessage("Error.",
        "La cantidad excede el stock",
        TypeMessageSwal.ERROR,
        1000, false);
    } else {
      this.cartService.increaseItem(product);
      this.updateTable();
    }
  }

  decrease(product: Product) {
    this.cartService.decreaseItem(product);
    this.updateTable();
  }

  displayedColumns: string[] = [
    'Title',
    'Price',
    'Amount',
    'Actions'
  ];
}
