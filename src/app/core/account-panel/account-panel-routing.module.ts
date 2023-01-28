import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountPanelComponent} from "./page/account-panel.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {path: '', component: AccountPanelComponent,
    children : [
      {path: 'account-panel/profile', component: ProfileComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPanelRoutingModule { }
