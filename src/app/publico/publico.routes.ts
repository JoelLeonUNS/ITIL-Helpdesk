import { Routes } from '@angular/router';

export const PUBLICO_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'autenticacion',
    pathMatch: 'full',
  },
  {
    path: 'autenticacion',
    loadChildren: () =>
      import('./autenticacion/autenticacion.routes').then(m => m.AUTENTICACION_ROUTES),
  },
];
