import { Injectable, Type } from '@angular/core';
import { ModalFormIncidenciaComponent } from '../../componentes/modales/formulario/incidencia/modal-form-incidencia.component';
import { ModalDetallesTicketComponent } from '../../componentes/modales/detalles/detalles-ticket/modal-detalles-ticket.component';
import { ModalFormServicioSolicitanteComponent } from '../../componentes/modales/formulario/servicio-solicitante/modal-form-servicio-solicitante.component';
import { ModalDetallesSolicitudesComponent } from '../../componentes/modales/detalles/solicitudes/modal-detalles-solicitudes.component';

@Injectable({
  providedIn: 'root',
})
export class FabricaComponenteService {
  private componentes: { [key: string]: Type<any> } = {
    modalFormIncidencia: ModalFormIncidenciaComponent,
    modalDetallesIncidencia: ModalFormServicioSolicitanteComponent,
    modalDetallesSolicitudes: ModalDetallesSolicitudesComponent,
    modalDetallesTicket: ModalDetallesTicketComponent,
  };

  obtenerRef(nombre: string) {
    const component = this.componentes[nombre];
    if (!component) {
      throw new Error(`Componente '${nombre}' no encontrado.`);
    }
    return component;
  }
}
