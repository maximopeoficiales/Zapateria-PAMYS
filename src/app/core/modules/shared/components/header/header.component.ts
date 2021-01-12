import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  cartItemsCount: BehaviorSubject<number>; 

  constructor(private cartService: CartService) { 
    this.cartItemsCount = this.cartService.getCartItemsCount();
  }

  ngOnInit(): void {
    
  }

  logCart() {
    console.log(this.cartService.getCart());
    console.log(this.cartService.getTotal());
  }
  
}
