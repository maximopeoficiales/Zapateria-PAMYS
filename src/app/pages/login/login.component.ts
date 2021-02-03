import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth/login/login.service';
import { Router } from '@angular/router';
import { AuthControllerService } from 'src/app/core/api/services';
import { SwalAlerts } from 'src/app/core/modules/shared/swalAlerts/SwalAlerts';
import { TypeMessageSwal } from 'src/app/core/modules/shared/swalAlerts/TypeMessageSwal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private service: AuthControllerService,
    private swal: SwalAlerts
  ) {
    this.username = new FormControl('', [
      Validators.required,
      Validators.maxLength(18),
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]);

    this.form = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this.service
      .createTokenUsingPOSTResponse({
        username: this.username.value,
        password: this.password.value,
      })
      .subscribe(
        (res) => {
          const jwt = res.body.jwt;
          this.loginService.saveJWT(jwt);
          this.swal.showMessage(
            'Login Satisfactorio',
            `Usuario: ${res.body.user?.firstName}`,
            TypeMessageSwal.SUCCESS
          );
          console.log(res.body);
          setTimeout(() => {
            this.router.navigate(['/admin/vendors']);
          }, 1500);
          // alert(`Usuario logueado con token: ${jwt}`);
        },
        (err) => {
          this.swal.showMessage(
            'Error de Authenticacion',
            `Credenciales Incorrectas`,
            TypeMessageSwal.ERROR
          );
          console.log(err);
        }
      );
  }

  signUp(): void {
    this.router.navigate(['/signup']);
  }
}
