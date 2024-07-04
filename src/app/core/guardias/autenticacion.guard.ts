import { inject } from '@angular/core';
import { TokenService } from '../servicios/token/token.service';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

export const autenticacionGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  return tokenService.isLocalStorageAvailable$().pipe(
    map(isAvailable => {
      if (!isAvailable) {
        console.log('Local storage no disponible');
        router.navigate(['/redirigir']);
        return false;
      }

      console.log('Local storage disponible');

      if (!tokenService.esAutenticado()) {
        console.log('Usuario no autenticado');
        router.navigate(['autenticacion/ingreso']);
        return false;
      }

      console.log('Usuario autenticado');

      return true;
    })
  );
 
};
