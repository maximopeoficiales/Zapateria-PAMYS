import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private backend_url: string = "spring.zapateria-pamys.ml/api" 

  constructor(private http: HttpClient) { }

  get(endpoint: string) : Observable<any> {
    // console.log(this.backend_url+endpoint);
    return this.http.get<any>(this.backend_url+endpoint);
  }

  // TODO: Add the remaining http methods
}
