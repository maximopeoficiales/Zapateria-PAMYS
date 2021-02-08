import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../core/services/auth/login/login.service';
import { Client } from '../../../../core/api/models/client';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-account-container',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass'],
})
export class MyAccountComponent implements OnInit {
  user: Client = {};
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.cargarUser();
  }

  cerrarSesion(): void {
    this.loginService.removeJWT();
    this.router.navigate(['/home']);
  }
  cargarUser(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.user = this.loginService.getUser()!;
  }
}
