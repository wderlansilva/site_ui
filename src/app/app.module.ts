import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountPanelModule } from "./core/account-panel/account-panel.module";
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';
import { AuthService } from "./shared/authService/auth.service";
import { MaterialModule } from './shared/material/material.module';
import { ReportSnack } from "./shared/report/report.snack";
import {AuthInterceptor} from "./shared/interceptors/auth.interceptor";
import { JwtModule} from "@auth0/angular-jwt";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaterialModule,
    HttpClientModule,
    AccountPanelModule,
    FooterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('id_token'),
        // allowedDomains: ['example.com'],
        // disallowedRoutes: ['example.com/auth/login'],
      },
    }),
  ],
  providers: [
    AuthService,
    ReportSnack,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
