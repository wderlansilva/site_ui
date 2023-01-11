import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRepository} from "./login.repository";
import {LoginAdapter} from "./login.adapter";
import {LoginGateway} from "../domain/boundaries/login.gateway";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoginRepository,
    LoginAdapter,
    {
      provide: LoginGateway,
      useExisting: LoginAdapter
    }
  ]
})
export class DataModule {
}
