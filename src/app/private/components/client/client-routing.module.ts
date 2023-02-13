import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditClientComponent } from './add-edit-client/add-edit-client.component';
import { ClientComponent } from './client.component';
import { ShowClientComponent } from './show-client/show-client.component';

const routes: Routes = [
  {
    path:'',
    component:ClientComponent
  },
  {
    path: 'add',
    component: AddEditClientComponent
  },
  {
    path:'edit/:id-slug',
    component: AddEditClientComponent
  },
  {
    
    path:'show/:id-slug',
    component: ShowClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
