import { environment } from './../../../../environments/environment';
import { apiEndPoint } from 'src/app/core/services/http/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRequest<T>(api: apiEndPoint, params?: string): Observable<T> {
    let response: Observable<T>;    
    if (params)
          response = this.http.get<T>(`${environment.apiURL}${api}${params}`)
                          .pipe(catchError((err) => this.handleError(err)));
        else
          response = this.http.get<T>(`${environment.apiURL}${api}`)
                          .pipe(catchError((err) => this.handleError(err)));
    return response;
  }

  postRequest(api: apiEndPoint, body: any) : Observable<any> {
    return this.http.post(`${environment.apiURL}${api}`, body)
                .pipe(catchError((err) => this.handleError(err)));
  }

  // TODO: Add the remaining http methods

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred:', error.error.message);
      return throwError({error: error.message, status: error.status});
    } else {
      return throwError({error: error.message, status: error.status});
    }
  }

}
