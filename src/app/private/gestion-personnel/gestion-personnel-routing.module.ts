import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPersonnelComponent } from './gestion-personnel.component';

const routes: Routes = [{ path: '', component: GestionPersonnelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionPersonnelRoutingModule { }
