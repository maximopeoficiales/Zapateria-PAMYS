import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../../../../services/cart/cart.service';
import { LoginService } from '../../../../services/auth/login/login.service';

@Component({
  selector: 'app-footer-responsive',
  templateUrl: './footer-responsive.component.html',
  styleUrls: ['./footer-responsive.component.sass'],
})
export class FooterResponsiveComponent implements OnInit {
  cartItemsCount: BehaviorSubject<number>;
  nameUser: string | undefined = 'Cuenta';
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
