import {Injectable} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { ServicioCrud } from '../servicio-crud';
import { Observable, of, delay } from 'rxjs';
import { ParametroPaginado } from '../../../interfaces/utilidades/parametro-paginado';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})

export class TicketService  extends ServicioCrud<any> {
  
  roles = [
    { id: 1, descripcion: 'Profesor', abreviatura: 'pro', estado: 1 },
    { id: 2, descripcion: 'Estudiante', abreviatura: 'esr', estado: 1 },
    { id: 3, descripcion: 'Administrador', abreviatura: 'adm', estado: 1 },
  ];

  users = [
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

  solicitudes = [
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
  
  constructor(http: HttpClient, private autenticacionService: AutenticacionService) {
    super(http, `${environment.apiURL}/tickets`);
  }

  override obtenerTodos(): Observable<any[]> {
    let items = this.getStorage();
    // filtrar por ID de usuario, si no es administrador
    if (this.autenticacionService.obtenerIdUsuario() !== 3) {
      items = items.filter(i => (i as any).user === this.autenticacionService.obtenerIdUsuario());
    }

    for (let i = 0; i < items.length; i++) {
      items[i] = this.llenarDatos(items[i]);
    }
    return of(items).pipe(delay(100));
  }

  override obtenerPorId(id: number): Observable<any | null> {
    let item = this.getStorage().find(i => (i as any).id === id);
    item = this.llenarDatos(item);

    return of(item || null).pipe(delay(100));
  }

  override obtenerTodoPag(p: ParametroPaginado): Observable<any> {
    let items = this.getStorage();
    // filtrar por ID de usuario, si no es administrador
    if (this.autenticacionService.obtenerIdUsuario() !== 3) {
      items = items.filter(i => (i as any).user === this.autenticacionService.obtenerIdUsuario());
    }

    for (let i = 0; i < items.length; i++) {
      items[i] = this.llenarDatos(items[i]);
    }
    
    // Aplicar búsqueda
    if (p.searchTerm && p.searchColumn) {
      items = items.filter(item => 
        String(item[p.searchColumn!]).toLowerCase().includes(p.searchTerm!.toLowerCase())
      );
    }

    // Aplicar filtros
    if (Array.isArray(p.filter) && p.filter.length > 0) {
      items = items.filter(item => 
        p.filter.every(f => {
          if (Array.isArray(f.value)) {
            return f.value.includes(item[f.key]);
          } else if (f.value) {
            return item[f.key] === f.value;
          } else {
            return item;
          }
        })
      );
    }

    // Aplicar ordenamiento
    if (p.sortField && p.sortOrder) {
      items.sort((a, b) => {
        if (a[p.sortField!] < b[p.sortField!]) return p.sortOrder === 'asc' ? -1 : 1;
        if (a[p.sortField!] > b[p.sortField!]) return p.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Calcular índices para la paginación
    const startIndex = (p.pageIndex - 1) * p.pageSize;
    const endIndex = startIndex + p.pageSize;
    const paginatedItems = items.slice(startIndex, endIndex);

    return of({
      data: paginatedItems,
      total: items.length
    }).pipe(delay(100)); // Simular retraso de red
  }

  llenarDatos(item:any):any {
    const id_user = item.user;
    const id_type = item.type;
    const user = this.users.find(u => u.id === id_user);
    const id_role = user?.rol_id;
    item.name = user?.name;
    item.surname = user?.surname;
    item.type = this.solicitudes.find(s => s.id === id_type)?.name;
    item.role = this.roles.find(r => r.id === id_role)?.descripcion;
    return item;
  }

}