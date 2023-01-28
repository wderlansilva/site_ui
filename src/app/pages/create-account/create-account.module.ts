import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './presentation/page/create-account.component';
import {ReportSnack} from "../../shared/report/report.snack";


@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    ReportSnack
  ]
})
export class CreateAccountModule { }
