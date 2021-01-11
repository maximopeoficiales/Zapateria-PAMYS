import { HttpService } from 'src/app/core/services/http/http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth/login/login.service';
import { apiEndPoint } from 'src/app/core/services/http/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private loginService: LoginService,
              private router: Router) { 
    this.username = new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(18)
      ]     
    );
    
    this.password = new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(20)
      ]
    );

    this.form = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit(): void {    
  }

  submit() {
    this.loginService.login(this.username.value, this.password.value)
        .then((res) => {
          this.loginService.saveJWT(res.jwt);
          alert(`Usuario logueado con token: ${res.jwt}`);
        }).catch((err) => {
          alert(`Credenciales incorrectas`);
          console.log(err);
        });    
  } 

  signUp() {
    this.router.navigate(["/signup"]);
  }

}
