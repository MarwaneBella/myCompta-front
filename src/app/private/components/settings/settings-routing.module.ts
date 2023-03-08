import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './numerotation/general/general.component';
import { NumerotationComponent } from './numerotation/numerotation.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path:'',
    component:SettingsComponent
  },
  {
    path :'general',
    component : GeneralComponent
  },
  {
    path : 'uids',
    component: NumerotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
