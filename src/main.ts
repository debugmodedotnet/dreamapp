
import { enableProdMode, ErrorHandler, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { APP_ROUTES } from './app/routings/app-routing';
import { GlobalLoaderInterceptor } from './app/interceptors/global-loader.interceptor';
import { GlobalLogService } from './app/services/global-log.service';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom(HttpClientModule, BrowserAnimationsModule), 
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES)
    ),
    {provide:HTTP_INTERCEPTORS,useClass:GlobalLoaderInterceptor, multi:true},
    {provide:ErrorHandler,useClass:GlobalLogService}
  ]
});