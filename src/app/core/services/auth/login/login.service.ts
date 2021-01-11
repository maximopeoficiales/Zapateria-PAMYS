import { Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { Injectable } from '@angular/core';
import { apiEndPoint } from 'src/app/core/services/http/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  login(username: string, password: string): Promise<any> {
      return this.http.postRequest(apiEndPoint.login, {username, password}).toPromise();
  }

  saveJWT(jwt: string) {
    if (localStorage.getItem("jwt")) {
      localStorage.removeItem("jwt");
      localStorage.setItem("jwt", jwt);
    }
    localStorage.setItem("jwt", jwt);
    
  }
}
