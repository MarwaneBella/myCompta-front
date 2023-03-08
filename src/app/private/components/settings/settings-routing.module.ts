import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { NumerotationComponent } from './numerotation/numerotation.component';
import { SettingsComponent } from './settings.component';
import { TypeArticleComponent } from './type-article/type-article.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'preferences',
        children: [
          {
            path: 'general',
            component: GeneralComponent,
          },
          {
            path: 'uids',
            component: NumerotationComponent,
          },
          {
            path:'',
            redirectTo:'uids',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'item-types',
        component: TypeArticleComponent
      },
      {
        path:'',
        redirectTo:'preferences',
        pathMatch: 'full'
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
