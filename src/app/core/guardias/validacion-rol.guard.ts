import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AutenticacionService } from '../servicios/rest/autenticacion/autenticacion.service';
import { UsuarioService } from '../servicios/rest/usuario/usuario.service';


export const validacionRolGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let usuarioRol: number = 0;
  const autenticacionService = inject(AutenticacionService);
  const router = inject(Router);

  const id = autenticacionService.obtenerIdUsuario();
  usuarioRol = await obtenerRolUsuario(id);
  const roles = route.data?.['rolesPermitidos'];
  const rolValido = Boolean(roles.includes(usuarioRol));

  if (!rolValido) {
    router.navigate(['autenticacion/ingreso']);
    return false;
  } else {
    console.log('Ruta permitida');
    return true;
  }
};

const obtenerRolUsuario = async (id: number | null): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    inject(UsuarioService).obtenerPorId(id ?? 0).subscribe({
      next: (resp) => {
        resolve(resp.rol_id);
      },
      error: (err) => {
        reject(err);
      }
    });
  });
};