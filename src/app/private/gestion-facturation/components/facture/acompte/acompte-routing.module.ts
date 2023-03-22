import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcompteComponent } from './acompte.component';

const routes: Routes = [{ path: '', component: AcompteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcompteRoutingModule { }
