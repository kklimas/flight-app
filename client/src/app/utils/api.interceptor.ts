import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private baseURL = 'http://localhost:8099'
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = req.clone({url: `${this.baseURL}/${req.url}`});
    return next.handle(apiReq);
  }
}
