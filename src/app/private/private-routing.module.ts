import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentComponent } from './components/environment/environment.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: 'environment',
    component: PrivateComponent,
    children: [
      {
        path: '',
        component: EnvironmentComponent,
      },

      {
        path: 'facturation',
        loadChildren: () =>
          import('./gestion-facturation/gestion-facturation.module').then(
            (m) => m.GestionFacturationModule
          ),
      },
      {
        path: 'personnel',
        loadChildren: () =>
          import('./gestion-personnel/gestion-personnel.module').then(
            (m) => m.GestionPersonnelModule
          ),
      },
    ],
  },
  {
    path:'',
    redirectTo:'environment',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
