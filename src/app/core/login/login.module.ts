import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckLoginInteractors} from "./domain/interactors/checkLogin.interactors";
import {CheckLoginPresenter} from "./presentation/presenter/checkLoginPresenter";
import {DataModule} from "./data/data.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataModule,
    HttpClientModule
  ],
  providers: [
    CheckLoginInteractors,
    CheckLoginPresenter
  ]
})
export class LoginModule { }
