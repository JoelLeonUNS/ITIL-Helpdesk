import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicioCrud } from '../servicio-crud';
import { delay, Observable, of } from 'rxjs';
import { ParametroPaginado } from '../../../interfaces/utilidades/parametro-paginado';

@Injectable({
  providedIn: 'root',
})
export class IncidenciaService extends ServicioCrud<any> {
  constructor(http: HttpClient) {
    super(http, `${environment.apiURL}/incidencias`);
  }

  obtenerServicio(incidencia_id: number): Observable<any> {
    const incidencias = this.getStorage();
    const servicio_id = incidencias.find((i: any) => i.id === incidencia_id).servicio_id;
    const servicios = JSON.parse(localStorage.getItem('servicios') || '[]');
    const servicio = servicios.find((s: any) => s.id === servicio_id);
    return  of(servicio).pipe(delay(100));
  }

  obtenerSolicitante(incidencia_id: number): Observable<any> {
    const incidencias = this.getStorage();
    const solicitante_id = incidencias.find((i: any) => i.id === incidencia_id).solicitante_id;
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const solicitante = usuarios.find((u: any) => u.id === solicitante_id);
    return of(solicitante).pipe(delay(100));
  }

  override obtenerTodos(): Observable<any[]> {
    const incidencias = this.getStorage();
    const servicios = JSON.parse(localStorage.getItem('servicios') || '[]');
    incidencias.forEach((item) => {
      item['servicio'] = servicios.find((s:any) => s.id === item.servicio_id).nombre;
      item['descripcion'] = servicios.find((s:any) => s.id === item.servicio_id).descripcion;
      item['tiempo_resolucion'] = servicios.find((s:any) => s.id === item.servicio_id).tiempo_resolucion;
      item['serv_calificacion'] = servicios.find((s:any) => s.id === item.servicio_id).serv_calificacion;
    }); 
    const solicitantes = JSON.parse(localStorage.getItem('usuarios') || '[]');
    incidencias.forEach((item) => {
      item['nombres'] = solicitantes.find((u:any) => u.id === item.solicitante_id).nombres;
      item['apellidos'] = solicitantes.find((u:any) => u.id === item.solicitante_id).apellidos;
    });
    return of(incidencias).pipe(delay(100));
  }

  override obtenerTodoPag(p: ParametroPaginado, query?: any[]): Observable<any> {
    query = this.getStorage();
    // se le agrega un atributo más a cada item del array
    const servicios = JSON.parse(localStorage.getItem('servicios') || '[]');
    query.forEach((item) => {
      item['servicio'] = servicios.find((s:any) => s.id === item.servicio_id).nombre;
      item['descripcion'] = servicios.find((s:any) => s.id === item.servicio_id).descripcion;
      item['tiempo_resolucion'] = servicios.find((s:any) => s.id === item.servicio_id).tiempo_resolucion;
      item['serv_calificacion'] = servicios.find((s:any) => s.id === item.servicio_id).serv_calificacion;
    }); 
    return super.obtenerTodoPag(p, query);
  }
}
