import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { SharedModule } from '../shared/shared.module';
import { KeyWordFormComponent } from './components/key-word-form/key-word-form.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { SelectClientFormComponent } from './components/select-client-form/select-client-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectRecipientComponent } from './components/select-recipient/select-recipient.component';
import { ArticlePanelComponent } from './components/article-panel/article-panel.component';
import { ReglementFormComponent } from './components/reglement-form/reglement-form.component';
import { TextFieldFormComponent } from './components/text-field-form/text-field-form.component';

@NgModule({
  declarations: [
    PrivateComponent,
    DashboardComponent,
    AddressFormComponent,
    KeyWordFormComponent,
    PhoneFormComponent,
    SelectClientFormComponent,
    NavbarComponent,
    SelectRecipientComponent,
    ArticlePanelComponent,
    ReglementFormComponent,
    TextFieldFormComponent,
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
    SelectClientFormComponent,
    SelectRecipientComponent,
    ArticlePanelComponent,
    ReglementFormComponent,
    TextFieldFormComponent
  ],
  providers:[
    DecimalPipe
  ]
})
export class PrivateModule { }
