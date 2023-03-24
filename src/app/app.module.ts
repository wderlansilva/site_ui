import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountPanelModule } from './core/account-panel/account-panel.module';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';
import { AuthService } from './shared/authService/auth.service';
import { MaterialModule } from './shared/material/material.module';
import { ReportSnack } from './shared/report/report.snack';
import { FriendsComponent } from './friends/friends.component';
import { LeftFeaturesComponent } from './left-features/left-features.component';
import { RightFeaturesComponent } from './right-features/right-features.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    LeftFeaturesComponent,
    RightFeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaterialModule,
    HttpClientModule,
    AccountPanelModule,
    FooterModule,
  ],
  providers: [AuthService, ReportSnack],
  bootstrap: [AppComponent],
})
export class AppModule {}
