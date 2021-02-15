import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from 'src/app/core/api/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Array<{product: Product, amount: number}>;
  private cartItemsCount: BehaviorSubject<number>;

  constructor() {
    this.cartItemsCount = new BehaviorSubject(0);
    this.cart = new Array<{product: Product, amount: number}>();
    this.initialiseCart();
    if (this.loadCart()?.length > 0) {
      let cartData = this.loadCart();
      this.cart = cartData;
      this.cartItemsCount.next(cartData.reduce((i, j) => i + j.amount, 0));
    }
  }

  initialiseCart(): void {
    this.cart = new Array<{product: Product, amount: number}>();
    this.cartItemsCount = new BehaviorSubject(0);
  }

  getCart() {
    return this.cart;
  }

  saveCart(): void {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  loadCart(): Array<{product: Product, amount: number}> {
    return <Array<{product: Product, amount: number}>>JSON.parse(localStorage.getItem("cart")!);
  }

  getCartItemsCount() {
    return this.cartItemsCount;
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.product!.price! * j.amount, 0);
  }

  addItem(product: Product, amount?: number) {
    let added = false;
    for (let e of this.cart) {
      if (e.product.idProduct === product.idProduct) {
        if (amount! > 1) {
          e.amount += amount!;
          added = true;
          this.cartItemsCount.next(this.cartItemsCount.value + amount!);
          break;
        } else {
          e.amount++;
          added = true;
          this.cartItemsCount.next(this.cartItemsCount.value + 1);
          break;
        }
      }
    }
    if (!added && amount) {
      this.cart.push({product: product, amount: amount!});
      this.cartItemsCount.next(this.cartItemsCount.value + amount!);
    }
    this.saveCart();
  }

  increaseItem(product: Product) {
    let selectedProduct = this.cart.find(e => e.product.idProduct === product.idProduct);
    selectedProduct!.amount++;
    console.log(selectedProduct?.amount, product.stock);
    this.cartItemsCount.next(this.cartItemsCount.value + 1);
    this.saveCart();
  }

  decreaseItem(product: Product) {
    for (let [index, e] of this.cart.entries()) {
      if (e.product.idProduct == product.idProduct) {
        e.amount--;
        if (e.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }

    this.cartItemsCount.next(this.cartItemsCount.value - 1);
    this.saveCart();
  }

  removeProduct(product: Product) {
    for (let [index, e] of this.cart.entries()) {
      if (e.product.idProduct === product.idProduct) {
        this.cartItemsCount.next(this.cartItemsCount.value - e.amount);
        this.cart.splice(index, 1);
      }
    }
  }

}
