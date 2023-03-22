import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvoirRoutingModule } from './avoir-routing.module';
import { AvoirComponent } from './avoir.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AvoirComponent
  ],
  imports: [
    CommonModule,
    AvoirRoutingModule,
    SharedModule
  ]
})
export class AvoirModule { }
