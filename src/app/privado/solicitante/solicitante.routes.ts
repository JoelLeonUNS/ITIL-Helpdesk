import { Routes } from '@angular/router';
import { SolicitarServiciosComponent } from './paginas/solicitar-servicios/solicitar-servicios.component';
import { IncidenciasEnviadasComponent } from './paginas/incidencias-enviadas/incidencias-enviadas.component';

export const SOLICITANTE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'servicios',
    pathMatch: 'full'
  },
  {
    path: 'servicios',
    component: SolicitarServiciosComponent
  },
  {
    path: 'incidencias',
    component: IncidenciasEnviadasComponent
  }
];
