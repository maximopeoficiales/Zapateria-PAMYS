import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { LoginService } from '../services/auth/login/login.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private jwtOperations: LoginService) {}
  tokenJWT = this.jwtOperations.getJWT();
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Apply the headers
    if (this.tokenJWT) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenJWT}`,
        },
      });
    } else {
      req = req.clone({});
    }

    // Also handle errors globally
    return next.handle(req).pipe(
      tap(
        (x) => x,
        (err) => {
          // Handle this err
          console.error(
            `Error performing request, status code = ${err.status}`
          );
        }
      )
    );
  }
}
