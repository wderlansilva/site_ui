import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountRepository } from './create-account.repository';
import { CreateAccountAdapter } from './create-account.adapter';
import { CreateAccountGateway } from '../domain/boundaries/create-account.gateway';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CreateAccountRepository,
    CreateAccountAdapter,
    {
      provide: CreateAccountGateway,
      useExisting: CreateAccountAdapter
    }
  ]
})
export class DataModule { }
