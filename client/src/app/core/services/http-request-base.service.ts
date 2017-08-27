import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          'Authorization': 'JWT ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'charset': 'UTF-8'
        }});
      return next.handle(authReq);

    } else {
      const authReq = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'charset': 'UTF-8'
        }});
      return next.handle(authReq);
    }
  }
}
