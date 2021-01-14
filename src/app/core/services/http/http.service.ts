import { environment } from './../../../../environments/environment';
import { apiEndPoint } from 'src/app/core/services/http/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  // se agrego los demas metodos y se agrego tipado
  getRequest<T>(api: apiEndPoint, params?: string): Observable<T> {
    return this.http
      .get<T>(
        params
          ? `${environment.apiURL}${api}${params}`
          : `${environment.apiURL}${api}`
      )
      .pipe(catchError((err) => this.handleError(err)));
  }

  postRequest<T>(api: apiEndPoint, body: any): Observable<T> {
    return this.http
      .post<T>(`${environment.apiURL}${api}`, body)
      .pipe(catchError((err) => this.handleError(err)));
  }

  putRequest<T>(api: apiEndPoint, body: any): Observable<T> {
    return this.http
      .put<T>(`${environment.apiURL}${api}`, body)
      .pipe(catchError((err) => this.handleError(err)));
  }

  deleteRequest<T>(api: apiEndPoint, params: string): Observable<T> {
    return this.http
      .delete<T>(`${environment.apiURL}${api}${params}`)
      .pipe(catchError((err) => this.handleError(err)));
  }
  // TODO: Add the remaining http methods

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred:', error.error.message);
    }
    return throwError({ error: error.message, status: error.status });
  }
}
