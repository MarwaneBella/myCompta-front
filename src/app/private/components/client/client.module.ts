import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { AddEditClientComponent } from './add-edit-client/add-edit-client.component';
import { ShowClientComponent } from './show-client/show-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressFormComponent } from '../address-form/address-form.component';
import { PrivateModule } from '../../private.module';

@NgModule({
  declarations: [
    ClientComponent,
    AddEditClientComponent,
    ShowClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    PrivateModule
  ]
})
export class ClientModule {
  
}
