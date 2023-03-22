import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcompteRoutingModule } from './acompte-routing.module';
import { AcompteComponent } from './acompte.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AcompteComponent
  ],
  imports: [
    CommonModule,
    AcompteRoutingModule,
    SharedModule
  ]
})
export class AcompteModule { }
