import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { SharedModule } from '../shared/shared.module';
import { KeyWordFormComponent } from './components/key-word-form/key-word-form.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { SelectClientFormComponent } from './components/select-client-form/select-client-form.component';

@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,
    AddressFormComponent,
    KeyWordFormComponent,
    PhoneFormComponent,
    SelectClientFormComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ],
  exports:[
    AddressFormComponent,
    KeyWordFormComponent,
    PhoneFormComponent,
    SelectClientFormComponent
  ]
})
export class PrivateModule { }
