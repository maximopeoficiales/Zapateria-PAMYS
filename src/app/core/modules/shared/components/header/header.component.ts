import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { LoginService } from '../../../../services/auth/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  cartItemsCount: BehaviorSubject<number>;
  nameUser: string | undefined = 'Mi Cuenta';
  constructor(
    private cartService: CartService,
    private loginService: LoginService
  ) {
    this.cartItemsCount = this.cartService.getCartItemsCount();
  }

  ngOnInit(): void {
    this.cargarCliente();
  }

  logCart(): void {
    console.log(this.cartService.getCart());
    console.log(this.cartService.getTotal());
  }
  cargarCliente(): void {
    if (this.loginService.isLogged()) {
      this.nameUser = this.loginService.getUser()?.username;
    }
  }
}
