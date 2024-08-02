import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicioCrud } from '../servicio-crud';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioResponsableService extends ServicioCrud<any> {
  constructor(http: HttpClient) {
    super(http, `${environment.apiURL}/servicio-responsables`);
  }

  obtenerResponsables(servicio_id:number): Observable<any> {
    const servicio_responsables = this.getStorage();
    const responsable_ids = servicio_responsables.filter((i:any) => (i).servicio_id == servicio_id).map((i:any) => i.responsable_id);
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const responsables = usuarios.filter((u:any) => responsable_ids.includes(u.id));
    return of(responsables).pipe(delay(100));
  }
}
