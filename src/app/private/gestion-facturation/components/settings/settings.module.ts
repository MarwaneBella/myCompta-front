import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NumerotationComponent } from './numerotation/numerotation.component';
import { GeneralComponent } from './general/general.component';
import { TypeArticleComponent } from './type-article/type-article.component';


@NgModule({
  declarations: [
    SettingsComponent,
    NumerotationComponent,
    GeneralComponent,
    TypeArticleComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
