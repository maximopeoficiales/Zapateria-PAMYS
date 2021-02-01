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
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private jwtOperations: LoginService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenJWT = this.jwtOperations.getJWT();
    // Apply the headers
    if (tokenJWT) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenJWT}`,
        },
      });
    } else {
      req = req.clone({});
      // this.router.navigate(['/login']);
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
