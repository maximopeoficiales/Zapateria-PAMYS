import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../core/api/models/client';
import { LoginService } from '../../../../core/services/auth/login/login.service';

@Component({
  selector: 'app-my-account-show',
  templateUrl: './my-account-show.component.html',
  styleUrls: ['./my-account-show.component.sass'],
})
export class MyAccountShowComponent implements OnInit {
  user: Client = {};
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.cargarUser();
  }

  cargarUser(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.user = this.loginService.getUser()!;
  }
}
