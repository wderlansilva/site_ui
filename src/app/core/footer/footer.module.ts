import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../shared/material/material.module";

@NgModule({
    declarations: [FooterComponent],
    imports: [
      CommonModule,
      MaterialModule
    ],
    exports: [FooterComponent]
})
export class FooterModule {}
