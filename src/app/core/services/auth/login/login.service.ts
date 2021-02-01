import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  saveJWT(jwt: any): void {
    if (this.getJWT()) {
      localStorage.removeItem('jwt');
      localStorage.setItem('jwt', jwt);
    }
    localStorage.setItem('jwt', jwt);
  }

  getJWT(): string | null {
    return localStorage.getItem('jwt');
  }

  removeJWT(): void {
    return localStorage.removeItem('jwt');
  }
}
