import { Routes } from '@angular/router';
import { autenticacionGuard } from './core/guardias/autenticacion.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () =>
        import('./publico/publico.routes').then((m) => m.PUBLICO_ROUTES)
    },
    {
        path: '',
        loadChildren: () =>
        import('./privado/privado.routes').then((m) => m.PRIVADO_ROUTES),
        canActivate: [autenticacionGuard],
    },
    { path: '**', redirectTo: '' },
];

