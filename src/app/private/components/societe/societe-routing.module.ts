import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditSocieteComponent } from './add-edit-societe/add-edit-societe.component';
import { ShowSocieteComponent } from './show-societe/show-societe.component';
import { SocieteComponent } from './societe.component';

const routes: Routes = [
  {
    path:'',
    component:SocieteComponent
  },
  {
    path: 'add',
    component: AddEditSocieteComponent
  },
  {
    path:'edit/:id',
    component: AddEditSocieteComponent
  },
  {
    
    path:'show/:id',
    component: ShowSocieteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
