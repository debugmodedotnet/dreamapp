import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { GlobalLoaderService } from '../services/global-loader.service';

@Injectable()
export class GlobalLoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService:GlobalLoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.nextLoading(true);
    return next.handle(request).pipe(
      delay(500),
      finalize(() => this.loaderService.nextLoading(false))
    );
  }
}
