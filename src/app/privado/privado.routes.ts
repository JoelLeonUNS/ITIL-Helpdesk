import { Routes } from '@angular/router';
import { PrivadoComponent } from './privado.component';
import { validacionRolGuard } from '../core/guardias/validacion-rol.guard';

export const PRIVADO_ROUTES: Routes = [
  {
    path: '',
    component: PrivadoComponent,
    children: [
      {
        path: 'admin',
        data: {
          rolesPermitidos:[1]
        },
        canActivate: [validacionRolGuard],
        loadChildren: ()=> import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
      },
      {
        path: 'servidor',
        data: {
          rolesPermitidos:[2]
        },
        canActivate: [validacionRolGuard],
        loadChildren: ()=> import('./servidor/servidor.routes').then(m => m.SERVIDOR_ROUTES),
      },
      {
        path: 'solicitante',
        data: {
          rolesPermitidos:[3]
        },
        canActivate: [validacionRolGuard],
        loadChildren: ()=> import('./solicitante/solicitante.routes').then(m => m.SOLICITANTE_ROUTES),
      },
      
    ],
  },
];
