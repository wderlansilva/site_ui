import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './page/create-account.component';


@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule
  ]
})
export class CreateAccountModule { }
