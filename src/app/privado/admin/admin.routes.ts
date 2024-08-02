import { Routes } from '@angular/router';
import { AsignacionComponent } from './paginas/asignacion/asignacion.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { TicketsAdminComponent } from '../paginas/tickets-admin/tickets-admin.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'asignacion',
    pathMatch: 'full'
  },
  {
    path: 'asignacion',
    component: AsignacionComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  }
];
