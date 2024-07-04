import { Injectable, Type } from '@angular/core';
import { ModalFormTicketComponent } from '../../componentes/modales/formulario/ticket/modal-form-ticket.component';
import { ModalDetallesTicketComponent } from '../../componentes/modales/modal/detalles-ticket/modal-detalles-ticket.component';

@Injectable({
  providedIn: 'root',
})
export class FabricaComponenteService {
  private componentes: { [key: string]: Type<any> } = {
    modalFormTicket: ModalFormTicketComponent,
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
