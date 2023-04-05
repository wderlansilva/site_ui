import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './core/account-panel/components/profile/profile.component';
import { HomeComponent } from './pages/home/page/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'create-account',
    loadChildren: () =>
      import('./pages/create-account/create-account.module').then(
        (m) => m.CreateAccountModule
      ),
  },
  {
    path: 'account-panel',
    loadChildren: () =>
      import('./core/account-panel/account-panel.module').then(
        (m) => m.AccountPanelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
