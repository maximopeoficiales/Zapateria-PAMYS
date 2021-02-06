import { Injectable } from '@angular/core';
import { Client } from '../../../api/models/client';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  nameJWT = 'jwt';
  nameCLient = 'client';
  constructor() {}

  saveJWT(jwt: string, user: Client): void {
    if (this.getJWT()) {
      localStorage.removeItem(this.nameJWT);
      localStorage.removeItem(this.nameCLient);
      localStorage.setItem(this.nameJWT, jwt);
      localStorage.setItem(this.nameCLient, JSON.stringify(user));
    }
    localStorage.setItem(this.nameJWT, jwt);
    localStorage.setItem(this.nameCLient, JSON.stringify(user));
  }

  getJWT(): string {
    return localStorage.getItem(this.nameJWT) || '';
  }
  getUser(): Client {
    return JSON.parse(localStorage.getItem(this.nameCLient) || '');
  }

  removeJWT(): void {
    localStorage.removeItem(this.nameJWT);
    localStorage.removeItem(this.nameCLient);
  }
}
