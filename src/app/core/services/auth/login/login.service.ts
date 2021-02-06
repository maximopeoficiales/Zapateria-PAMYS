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

  getJWT(): string | null {
    return localStorage.getItem(this.nameJWT);
  }
  getUser(): Client | null {
    return JSON.parse(localStorage.getItem(this.nameCLient) || '');
  }

  isLogged(): boolean {
    return this.getJWT() ? true : false;
  }

  removeJWT(): void {
    localStorage.removeItem(this.nameJWT);
    localStorage.removeItem(this.nameCLient);
  }
}
