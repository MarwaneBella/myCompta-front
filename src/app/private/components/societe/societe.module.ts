import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { SocieteComponent } from './societe.component';
import { AddEditSocieteComponent } from './add-edit-societe/add-edit-societe.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowSocieteComponent } from './show-societe/show-societe.component';


@NgModule({
  declarations: [
    SocieteComponent,
    AddEditSocieteComponent,
    ShowSocieteComponent
  ],
  imports: [
    CommonModule,
    SocieteRoutingModule,
    SharedModule
  ]
})
export class SocieteModule { }
