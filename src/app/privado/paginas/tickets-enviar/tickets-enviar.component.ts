import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalService } from '../../../core/servicios/modal/modal.service';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { TablaPagEditarTicketsEnviadosComponent } from '../../../core/componentes/tablas/paginada/editar/tickets-enviados/tabla-pag-editar-tickets-enviados.component';
import { MosaicoTarjetaServicioComponent } from "../../../core/componentes/mosaico-tarjeta/servicio/mosaico-tarjeta-servicio.component";

@Component({
  selector: 'app-tickets-enviar',
  standalone: true,
  templateUrl: './tickets-enviar.component.html',
  styleUrl: './tickets-enviar.component.css',
  providers: [ModalService],
  imports: [
    CommonModule,
    NzButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzFlexModule,
    NzDividerModule,
    NzIconModule,
    NzStatisticModule,
    NzTagModule,
    NzSpaceModule,
    NzPageHeaderModule,
    TablaPagEditarTicketsEnviadosComponent,
    MosaicoTarjetaServicioComponent
],
})
export class TicketsEnviarComponent {
  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('tablaTickets')
  tablaTickets!: TablaPagEditarTicketsEnviadosComponent;

  constructor(private modalService: ModalService) {}

  abrirModal() {
    this.modalService.insertarModalCrear(this.vcr, 'modalFormIncidencia');
    this.modalService.obtenerInstancia().onConfirmar.subscribe(() => {
      this.tablaTickets.cargarDatosServidor();
    });
  }
}
