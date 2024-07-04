import { Routes } from '@angular/router';
import { PrivadoComponent } from './privado.component';
import { TicketsAdminComponent } from './paginas/tickets-admin/tickets-admin.component';
import { TicketsEnviarComponent } from './paginas/tickets-enviar/tickets-enviar.component';
import { validacionRolGuard } from '../core/guardias/validacion-rol.guard';

export const PRIVADO_ROUTES: Routes = [
  {
    path: '',
    component: PrivadoComponent,
    children: [
      {
        path: 'admin/tickets',
        data: {
          rolesPermitidos:[3]
        },
        canActivate: [validacionRolGuard],
        component: TicketsAdminComponent,
      },
      {
        path: 'enviar/tickets',
        data: {
          rolesPermitidos:[1, 2]
        },
        canActivate: [validacionRolGuard],
        component: TicketsEnviarComponent,
      }
    ],
  },
];
