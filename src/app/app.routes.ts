import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'router-apis',
    loadChildren: () =>
      import('./RouterApis/route-apis').then((d) => d.RouteAPis),
  },
];
