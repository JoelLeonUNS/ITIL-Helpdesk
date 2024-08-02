import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
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
import { TagsEstados } from '../../../../../interfaces/utilidades/tags.interface';
import { FiltroItem } from '../../../../../interfaces/utilidades/filtro-item.interface';
import { Estados } from '../../../../../enums/estados';
import { Prioridad } from '../../../../../enums/prioridad';

@Component({
  selector: 'app-tabla-pag-editar-tickets-enviados',
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
    NzSwitchModule,
    NzPopconfirmModule,
    NzTagModule,
    BuscadorTablaComponent
  ],
  templateUrl: './tabla-pag-editar-tickets-enviados.component.html',
  styleUrl: '../tabla-pag-editar.component.css',
})
export class TablaPagEditarTicketsEnviadosComponent extends TablaPagEditarComponent {
  override modal = 'modalFormTicket'
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
      name: 'Descripción',
      columnKey: 'description',
    },
    {
      name: 'Prioridad',
      columnKey: 'priority',
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
      name: 'Descripción',
      attribute: 'description',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Prioridad',
      attribute: 'priority',
      showSort: true,
      sortFn: true,
      etiquetable: true,
    },
    {
      name: 'Estado',
      attribute: 'status',
      showSort: true,
      sortFn: true,
      showFilter: true,
      filterFn: true,
      listOfFilter: [],
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
  ];
  override filtros: FiltroItem[] = [
    {
      attribute: 'estado',
      list: [
        { text: 'Enviado', value: Estados.ENVIADO },
        { text: 'Abierto', value: Estados.ABIERTO },
        { text: 'Cerrado', value: Estados.RESUELTO },
      ],
    },
  ];
  override tags: TagsEstados = {
    [Prioridad.BAJA]: { color: 'green' },
    [Prioridad.MEDIA]: { color: 'orange' },
    [Prioridad.ALTA]: { color: 'red' },
    [Estados.ENVIADO]: { color: 'blue' },
    [Estados.EN_PROCESO]: { color: 'orange' },
    [Estados.ABIERTO]: { color: 'red' },
    [Estados.RESUELTO]: { color: 'green' },
  };

  constructor(
    msgService: NzMessageService,
    pipeService: PipeService,
    servicio: TicketService,
    modalService:ModalService
  ) {
    super(msgService, pipeService, servicio, modalService);
    this.filtrosExternos.next(true);
    this.filtrosInternos.next(true);
  }
}
