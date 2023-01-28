import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { MaterialModule } from './shared/material/material.module';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./shared/authService/auth.service";
import {ReportSnack} from "./shared/report/report.snack";
import {AccountPanelModule} from "./core/account-panel/account-panel.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaterialModule,
    HttpClientModule,
    AccountPanelModule


  ],
  providers: [
    AuthService,
    ReportSnack
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
