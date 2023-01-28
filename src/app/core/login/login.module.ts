import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DataModule } from './data/data.module';
import { CheckLoginInteractors } from './domain/interactors/checkLogin.interactors';
import { CheckLoginPresenter } from './presentation/presenter/checkLoginPresenter';



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
