import { Routes } from '@angular/router';
import { validacionRolGuard } from '../../core/guardias/validacion-rol.guard';
import { IncidenciasRecibidasComponent } from './paginas/incidencias-recibidas/incidencias-recibidas.component';
import { ServiciosAsignadosComponent } from './paginas/servicios-asignados/servicios-asignados.component';

export const SERVIDOR_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'solicitudes',
    pathMatch: 'full'
  },
  {
    path: 'solicitudes',
    data: {
      rolesPermitidos:[2]
    },
    canActivate: [validacionRolGuard],
    component: IncidenciasRecibidasComponent
  },
  {
    path: 'servicios',
    data: {
      rolesPermitidos:[2]
    },
    canActivate: [validacionRolGuard],
    component: ServiciosAsignadosComponent
  },
];
