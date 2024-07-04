import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private readonly USUARIOS_KEY = 'usuarios';
  private readonly SOLICITUDES_KEY = 'solicitudes';
  private readonly ROLES_KEY = 'roles';
  private readonly SESION_KEY = 'id_sesion';

  constructor() {
    this.inicializarDatosLocalStorage();
  }

  inicializarDatosLocalStorage() {
    // Roles
    const roles = [
      { id: 1, descripcion: 'Profesor', abreviatura: 'pro', estado: 1 },
      { id: 2, descripcion: 'Estudiante', abreviatura: 'esr', estado: 1 },
      { id: 3, descripcion: 'Administrador', abreviatura: 'adm', estado: 1 },
    ];

    // Usuarios
    const usuarios = [
      {
        id: 1,
        name: 'Joel',
        surname: 'Leon Mondoñedo',
        correo: '202014033@uns.edu.pe',
        password: '1234',
        rol_id: 2,
      },
      {
        id: 2,
        name: 'Johan Max',
        surname: 'Lopez Heredia',
        correo: 'lopez-johan@uns.edu.pe',
        password: '1234',
        rol_id: 1,
      },
      { id: 3, correo: 'admin@uns.edu.pe', password: 'admin', rol_id: 3 },
    ];

    // Solicitudes
    const solicitudes = [
      {
        id: 1,
        name: 'Acceso a Plataforma de Aprendizaje',
        state: 1,
      },
      {
        id: 2,
        name: 'Restablecimiento de Contraseña',
        state: 1,
      },
      {
        id: 3,
        name: 'Problemas de Correo Electrónico',
        state: 1,
      },
      {
        id: 4,
        name: 'Solicitud de Software',
        state: 1,
      },
      {
        id: 5,
        name: 'Equipos Defectuosos',
        state: 1,
      },
    ];

    // Guardar en localStorage
    if (!localStorage.getItem(this.ROLES_KEY)) {
      localStorage.setItem(this.ROLES_KEY, JSON.stringify(roles));
    }
    if (!localStorage.getItem(this.USUARIOS_KEY)) {
      localStorage.setItem(this.USUARIOS_KEY, JSON.stringify(usuarios));
    }
    if (!localStorage.getItem(this.SOLICITUDES_KEY)) {
      localStorage.setItem(this.SOLICITUDES_KEY, JSON.stringify(solicitudes));
    }
  }

  ingreso(credenciales: any): Observable<boolean> {
    const usuarios: any[] = JSON.parse(
      localStorage.getItem(this.USUARIOS_KEY) || '[]'
    );
    const usuario = usuarios.find(
      (u) =>
        u.correo === credenciales.correo && u.password === credenciales.password
    );

    if (usuario) {
      this.guardarIdUsuario(usuario.id);
      return of(true).pipe(delay(300)); // Simulamos un retraso de red
    }
    return of(false).pipe(delay(300));
  }

  salida(): Observable<boolean> {
    localStorage.removeItem(this.SESION_KEY);
    return of(true).pipe(delay(300));
  }

  guardarIdUsuario(id: number) {
    localStorage.setItem(this.SESION_KEY, id.toString());
  }

  obtenerIdUsuario(): number | null {
    const id = localStorage.getItem(this.SESION_KEY);
    return id ? parseInt(id, 10) : null;
  }

  estaAutenticado(): boolean {
    return !!this.obtenerIdUsuario();
  }
}
