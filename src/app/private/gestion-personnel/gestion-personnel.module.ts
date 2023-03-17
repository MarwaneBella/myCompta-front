import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPersonnelRoutingModule } from './gestion-personnel-routing.module';
import { GestionPersonnelComponent } from './gestion-personnel.component';


@NgModule({
  declarations: [
    GestionPersonnelComponent
  ],
  imports: [
    CommonModule,
    GestionPersonnelRoutingModule
  ]
})
export class GestionPersonnelModule { }
