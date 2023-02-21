import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDevisComponent } from './add-edit-devis/add-edit-devis.component';
import { DevisComponent } from './devis.component';
import { ShowDevisComponent } from './show-devis/show-devis.component';

const routes: Routes = [
  {
    path:'',
    component:DevisComponent
  },
  {
    path: 'add',
    component: AddEditDevisComponent
  },
  {
    path:'edit/:id-slug',
    component: AddEditDevisComponent
  },
  {
    
    path:'show/:id-slug',
    component: ShowDevisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevisRoutingModule { }
