import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'societes',
        loadChildren: () =>
          import('./components/societe/societe.module').then(
            (m) => m.SocieteModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./components/client/client.module').then(
            (m) => m.ClientModule
          ),
      },
      {
        path: 'devis',
        loadChildren: () =>
          import('./components/devis/devis.module').then((m) => m.DevisModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./components/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: '',
        redirectTo: '/devis',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
