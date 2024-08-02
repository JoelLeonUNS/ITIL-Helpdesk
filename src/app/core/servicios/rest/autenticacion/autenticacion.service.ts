import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { Rol } from '../../../interfaces/modelos/rol.interface';
import { Usuario } from '../../../interfaces/modelos/usuario.interface';
import { Servicio } from '../../../interfaces/modelos/servicio.interface';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private readonly USUARIOS_KEY = 'usuarios';
  private readonly SERVICIOS_KEY = 'servicios';
  private readonly SERVICIO_RESPONSABLES_KEY = 'servicio-responsables';
  private readonly ROLES_KEY = 'roles';
  private readonly SESION_KEY = 'id_sesion';

  constructor() {
    this.inicializarDatosLocalStorage();
  }

  inicializarDatosLocalStorage() {
    // Roles
    const roles: Rol[] = [
      { id: 1, descripcion: 'Administrador', abreviatura: 'admin', estado: 1 },
      { id: 2, descripcion: 'Servidor', abreviatura: 'serv', estado: 1 },
      { id: 3, descripcion: 'Solicitante', abreviatura: 'solic', estado: 1 },
    ];

    // Usuarios
    const usuarios: Usuario[] = [
      {
        id: 1,
        correo: '202014033@uns.edu.pe',
        clave: '1234',
        nombres: 'Joel',
        apellidos: 'Leon Mondoñedo',
        telefono: '960181410',
        rol_id: 3,
      },
      {
        id: 2,
        correo: 'lopez-johan@uns.edu.pe',
        clave: '1234',
        nombres: 'Johan Max',
        apellidos: 'Lopez Heredia',
        telefono: '943992611',
        rol_id: 2,
      },
      {
        id: 3,
        correo: 'admin@uns.edu.pe',
        clave: 'admin',
        nombres: 'Administrador',
        apellidos: 'General',
        telefono: '000000000',
        rol_id: 1,
      },
    ];

    const servicio_responsables = [
      {
        id: 1,
        servicio_id: 1,
        responsable_id: 2,
      },
      {
        id: 2,
        servicio_id: 2,
        responsable_id: 2,
      },
      {
        id: 3,
        servicio_id: 3,
        responsable_id: 2,
      },
      {
        id: 4,
        servicio_id: 4,
        responsable_id: 2,
      },
      {
        id: 5,
        servicio_id: 5,
        responsable_id: 2,
      },
      {
        id: 6,
        servicio_id: 6,
        responsable_id: 2,
      },
      {
        id: 7,
        servicio_id: 7,
        responsable_id: 2,
      },
      {
        id: 8,
        servicio_id: 8,
        responsable_id: 2,
      },
      {
        id: 9,
        servicio_id: 9,
        responsable_id: 2,
      },
      {
        id: 10,
        servicio_id: 10,
        responsable_id: 2,
      },
      {
        id: 11,
        servicio_id: 11,
        responsable_id: 2,
      },
      {
        id: 12,
        servicio_id: 12,
        responsable_id: 2,
      },
      {
        id: 13,
        servicio_id: 13,
        responsable_id: 2,
      },
      {
        id: 14,
        servicio_id: 14,
        responsable_id: 2,
      },
      {
        id: 15,
        servicio_id: 15,
        responsable_id: 2,
      },
    ];

    // Solicitudes
    const servicios:Servicio[] = [
      {
        id: 1,
        nombre: 'Soporte Técnico',
        descripcion: 'Asistencia para problemas de hardware y software',
        prioridad: 'ALTA',
        tiempo_resolucion: 240,
        serv_calificacion: 4,
      },
      {
        id: 2,
        nombre: 'Gestión de Servidores',
        descripcion: 'Mantenimiento y configuración de servidores',
        prioridad: 'MEDIA',
        tiempo_resolucion: 144,
        serv_calificacion: 4.5,
      },
      {
        id: 3,
        nombre: 'Help Desk',
        descripcion: 'Centro de atención para consultas y problemas de TI',
        prioridad: 'BAJA',
        tiempo_resolucion: 120,
        serv_calificacion: 3.5,
      },
      {
        id: 4,
        nombre: 'Gestión de Correo Electrónico',
        descripcion: 'Configuración y mantenimiento de cuentas de correo',
        prioridad: 'ALTA',
        tiempo_resolucion: 480,
        serv_calificacion: 4,
      },
      {
        id: 5,
        nombre: 'Gestión de Equipos de cómputo y periféricos',
        descripcion: 'Configuración y mantenimiento de equipos de cómputo',
        prioridad: 'MEDIA',
        tiempo_resolucion: 480,
        serv_calificacion: 4,
      },
      {
        id: 6,
        nombre: 'Primeros Auxilios',
        descripcion: 'Atención y asistencia en una emergencia',
        prioridad: 'BAJA',
        tiempo_resolucion: 120,
        serv_calificacion: 4.5,
      },
      {
        id: 7,
        nombre: 'Acceso al laboratorio',
        descripcion: 'Asistencia para abrir las puertas de los laboratorios',
        prioridad: 'ALTA',
        tiempo_resolucion: 30,
        serv_calificacion: 3.5,
      },
      {
        id: 8,
        nombre: 'Impresión y escaneo',
        descripcion: 'Centro de impresiones de emergencia',
        prioridad: 'MEDIA',
        tiempo_resolucion: 60,
        serv_calificacion: 3.5,
      },
      {
        id: 9,
        nombre: 'Seguridad de Red',
        descripcion: 'Implementación y monitoreo de medidas de seguridad en la red',
        prioridad: 'ALTA',
        tiempo_resolucion: 360,
        serv_calificacion: 4.5,
      },
      {
        id: 10,
        nombre: 'Desarrollo de Aplicaciones',
        descripcion: 'Creación y mantenimiento de aplicaciones internas',
        prioridad: 'MEDIA',
        tiempo_resolucion: 720,
        serv_calificacion: 4,
      },
      {
        id: 11,
        nombre: 'Gestión de Bases de Datos',
        descripcion: 'Administración y optimización de bases de datos',
        prioridad: 'ALTA',
        tiempo_resolucion: 240,
        serv_calificacion: 4.2,
      },
      {
        id: 12,
        nombre: 'Soporte de Software Especializado',
        descripcion: 'Asistencia con software específico de la institución',
        prioridad: 'MEDIA',
        tiempo_resolucion: 180,
        serv_calificacion: 3.8,
      },
      {
        id: 13,
        nombre: 'Capacitación Tecnológica',
        descripcion: 'Sesiones de formación en nuevas tecnologías y herramientas',
        prioridad: 'BAJA',
        tiempo_resolucion: 480,
        serv_calificacion: 4.3,
      },
      {
        id: 14,
        nombre: 'Recuperación de Datos',
        descripcion: 'Servicios de recuperación de datos perdidos o dañados',
        prioridad: 'ALTA',
        tiempo_resolucion: 720,
        serv_calificacion: 4.7,
      },
      {
        id: 15,
        nombre: 'Mantenimiento de Redes Wi-Fi',
        descripcion: 'Configuración y mantenimiento de redes inalámbricas',
        prioridad: 'MEDIA',
        tiempo_resolucion: 120,
        serv_calificacion: 3.9,
      }
    ];

    // Guardar en localStorage
    if (!localStorage.getItem(this.ROLES_KEY)) {
      localStorage.setItem(this.ROLES_KEY, JSON.stringify(roles));
    }
    if (!localStorage.getItem(this.USUARIOS_KEY)) {
      localStorage.setItem(this.USUARIOS_KEY, JSON.stringify(usuarios));
    }
    if (!localStorage.getItem(this.SERVICIOS_KEY)) {
      localStorage.setItem(this.SERVICIOS_KEY, JSON.stringify(servicios));
    }
    if (!localStorage.getItem(this.SERVICIO_RESPONSABLES_KEY)) {
      localStorage.setItem(this.SERVICIO_RESPONSABLES_KEY, JSON.stringify(servicio_responsables)
      );
    }
  }

  ingreso(credenciales: any): Observable<boolean> {
    const usuarios: any[] = JSON.parse(
      localStorage.getItem(this.USUARIOS_KEY) || '[]'
    );
    const usuario = usuarios.find(
      (u) =>
        u.correo === credenciales.correo && u.clave === credenciales.clave
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
