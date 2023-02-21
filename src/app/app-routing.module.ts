import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { PrivateModule } from './private/private.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
