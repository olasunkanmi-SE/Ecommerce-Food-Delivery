import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = environment.yelpBearerToken;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });
    return next.handle(authReq);
  }
}
