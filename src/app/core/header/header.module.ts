import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MaterialModule} from 'src/app/shared/material/material.module';

import {HeaderComponent} from './header/header.component';
import {
  DialogLogin
} from '../login/presentation/page/dialog-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginModule} from "../login/login.module";


@NgModule({
  declarations: [
    HeaderComponent,
    DialogLogin
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule
  ],
  exports: [
    HeaderComponent,
    DialogLogin
  ]
})
export class HeaderModule {
}
