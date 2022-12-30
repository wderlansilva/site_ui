import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
