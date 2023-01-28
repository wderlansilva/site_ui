import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPanelRoutingModule } from './account-panel-routing.module';
import {MaterialModule} from "../../shared/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountPanelComponent} from "./page/account-panel.component";
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [AccountPanelComponent, ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AccountPanelRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountPanelModule { }
