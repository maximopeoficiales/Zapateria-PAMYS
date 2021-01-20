import { environment } from './../../../../environments/environment';
import { apiEndPoint } from 'src/app/core/services/http/constants';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  // private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  // se agrego los demas metodos y se agrego tipado
  getRequest<T>(
    api: apiEndPoint,
    params?: string,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http
      .get<T>(
        params
          ? `${environment.apiURL}${api}${params}`
          : `${environment.apiURL}${api}`,
        { headers }
      )
      .pipe(catchError((err) => this.handleError(err)));
  }

  postRequest<T>(
    api: apiEndPoint,
    body: T,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http
      .post<T>(`${environment.apiURL}${api}`, body, { headers })
      .pipe(catchError((err) => this.handleError(err)));
  }

  putRequest<T>(
    api: apiEndPoint,
    body: T,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http
      .put<T>(`${environment.apiURL}${api}`, body, { headers })
      .pipe(catchError((err) => this.handleError(err)));
  }

  deleteRequest<T>(
    api: apiEndPoint,
    params: string,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http
      .delete<T>(`${environment.apiURL}${api}${params}`, { headers })
      .pipe(catchError((err) => this.handleError(err)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred:', error.error.message);
    }
    return throwError({ error: error.message, status: error.status });
  }
}
