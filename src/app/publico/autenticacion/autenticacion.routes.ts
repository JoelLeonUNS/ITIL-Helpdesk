//este es el codigo del autenticacion.routes

import { Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';

export const AUTENTICACION_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full',
  },
  {
    path: 'ingreso',
    component: IngresoComponent,
  },
  // más rutas
];
