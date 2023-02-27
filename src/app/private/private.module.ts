import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddressFormComponent } from '../shared/components/address-form/address-form.component';
import { SharedModule } from '../shared/shared.module';
import { KeyWordFormComponent } from '../shared/components/key-word-form/key-word-form.component';
import { PhoneFormComponent } from '../shared/components/phone-form/phone-form.component';
import { SelectClientFormComponent } from '../shared/components/select-client-form/select-client-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectRecipientComponent } from '../shared/components/select-recipient/select-recipient.component';
import { ArticlePanelComponent } from '../shared/components/article-panel/article-panel.component';
import { ReglementFormComponent } from '../shared/components/reglement-form/reglement-form.component';
import { TextFieldFormComponent } from '../shared/components/text-field-form/text-field-form.component';

@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,    
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ],
  exports:[
  ],
  providers:[
    DecimalPipe
  ]
})
export class PrivateModule { }
