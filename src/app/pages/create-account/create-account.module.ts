import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CreateAccountRoutingModule } from './create-account-routing.module';
import { DataModule } from './data/data.module';
import { SaveUserInteractor } from './domain/interactors/save-user.interactors';
import { CreateAccountComponent } from './presentation/page/create-account.component';
import { CreateAccountPresenter } from './presentation/presenters/create-account.presenter';
import {ReportSnack} from "../../shared/report/report.snack";


@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    DataModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    CreateAccountPresenter,
    SaveUserInteractor,
    ReportSnack
  ]
})
export class CreateAccountModule { }
