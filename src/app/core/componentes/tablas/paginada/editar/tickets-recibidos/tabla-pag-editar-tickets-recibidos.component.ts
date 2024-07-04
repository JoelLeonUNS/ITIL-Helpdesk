import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ModalService } from '../../../../../servicios/modal/modal.service';
import { PipeService } from '../../../../../servicios/utilidades/pipe/pipe.service';
import { ColumnItem } from '../../../../../interfaces/utilidades/column-item.interface';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TablaPagEditarComponent } from '../tabla-pag-editar.component';
import { BuscadorTablaComponent } from '../../../../buscador-tabla/buscador-tabla.component';
import { ColumnaBusqueda } from '../../../../../interfaces/utilidades/columna-busqueda.interface';
import { TicketService } from '../../../../../servicios/rest/ticket/ticket.service';
import { TicketPriority } from '../../../../../enums/ticket-priority';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FiltroItem } from '../../../../../interfaces/utilidades/filtro-item.interface';
import { TagsEstados } from '../../../../../interfaces/utilidades/tags.interface';
import { TicketStatus } from '../../../../../enums/ticket-status';

@Component({
  selector: 'app-tabla-pag-editar-tickets-recibidos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzFlexModule,
    NzButtonModule,
    NzLayoutModule,
    NzSelectModule,
    NzTableModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzDividerModule,
    NzRadioModule,
    NzSwitchModule,
    NzPopconfirmModule,
    NzTagModule,
    BuscadorTablaComponent
  ],
  templateUrl: './tabla-pag-editar-tickets-recibidos.component.html',
  styleUrl: '../tabla-pag-editar.component.css',
})
export class TablaPagEditarTicketsRecibidosComponent extends TablaPagEditarComponent {
  override modal = 'modalDetallesTicket'
  override columnasBusqueda?: ColumnaBusqueda[] = [
    {
      name: 'Id',
      columnKey: 'id',
      type: 'NUMBER',
    },
    {
      name: 'Tipo',
      columnKey: 'type',
    },
    {
      name: 'Prioridad',
      columnKey: 'priority',
    },
    {
      name: 'Creado',
      columnKey: 'created_at',
      type: 'DATE',
    },
  ];
  override columnas: ColumnItem[] = [
    {
      name: 'Id',
      attribute: 'id',
      width: '50px',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Tipo',
      attribute: 'type',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Prioridad',
      attribute: 'priority',
      width: '200px',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Estado',
      attribute: 'status',
      showSort: true,
      sortFn: true,
      showFilter: true,
      filterFn: true,
      listOfFilter: [],
      width: '100px',
      etiquetable: true,
    },
    {
      name: 'Creado',
      attribute: 'created_at',
      width: '115px',
      showSort: true,
      sortFn: true,
      pipe: { nombre: 'date', datos: ['dd/MM/yyyy'] },
    },
    {
      name: 'Actualizado',
      attribute: 'updated_at',
      width: '115px',
      showSort: true,
      sortFn: true,
      pipe: { nombre: 'date', datos: ['dd/MM/yyyy'] },
    },
    {
      name: 'Acción',
      width: '135px',
      right: true,
    },
  ];
  override filtros: FiltroItem[] = [
    {
      attribute: 'status',
      list: [
        { text: 'Enviado', value: TicketStatus.Sent },
        { text: 'Abierto', value: TicketStatus.Open },
        { text: 'Cerrado', value: TicketStatus.Closed },
      ],
    },
  ];
  override tags: TagsEstados = {
    [TicketStatus.Sent]: { color: 'blue' },
    [TicketStatus.InProgress]: { color: 'orange' },
    [TicketStatus.Open]: { color: 'red' },
    [TicketStatus.Closed]: { color: 'green' },
  };

  constructor(
    msgService: NzMessageService,
    pipeService: PipeService,
    servicio: TicketService,
    modalService:ModalService,
    private datePipe: DatePipe,
  ) {
    super(msgService, pipeService, servicio, modalService);
    this.filtrosExternos.next(true);
    this.filtrosInternos.next(true);
  }

  cambiarPrioridad(item: any) {
    let itemUpdate = {
      priority: item.priority,
      updated_at: item.updated_at,
    };

    itemUpdate.updated_at = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.servicio.parcialActualizar(item.id, itemUpdate).subscribe(() => {
      this.msgService.success('Prioridad actualizada');
    });
  }

  cerrarTicket(item: any) {
    item.status = TicketStatus.Closed;
    let itemUpdate = {
      status: item.status,
      updated_at: item.updated_at,
    };

    itemUpdate.updated_at = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.servicio.parcialActualizar(item.id, itemUpdate).subscribe(() => {
      this.msgService.success('Ticket cerrado');
    });
  }

  cancelar() {
    this.msgService.info('Operación cancelada');
  }

}
