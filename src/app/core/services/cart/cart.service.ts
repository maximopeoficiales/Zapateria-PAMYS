import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/core/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Array<{product: Product, amount: number}>;
  private cartItemsCount: BehaviorSubject<number>;

  constructor() { 
    this.cart = new Array<{product: Product, amount: number}>();
    this.cartItemsCount = new BehaviorSubject(0);
  }

  getCart() {
    return this.cart;
  }

  getCartItemsCount() {
    return this.cartItemsCount;
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.product.price * j.amount, 0);
  }

  addItem(product: Product) {
    let added = false;
    for (let e of this.cart) {
      if (e.product.id === product.id) {
        e.amount++;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push({ product: product, amount: 1 });
    }

    this.cartItemsCount.next(this.cartItemsCount.value + 1);
  }

  decreaseItem(product: Product) {
    for(let [index, e] of this.cart.entries()) {
      if (e.product.id == product.id) {
        e.amount--;
        if (e.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }

    this.cartItemsCount.next(this.cartItemsCount.value - 1);
  }

  removeProduct(product: Product) {
    for (let [index, e] of this.cart.entries()) {
      if (e.product.id === product.id) {
        this.cartItemsCount.next(this.cartItemsCount.value - e.amount);
        this.cart.splice(index, 1);
      }
    }
  } 

}
