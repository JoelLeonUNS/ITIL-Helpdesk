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
import { TablaPagEditarComponent } from '../tabla-pag-detalles.component';
import { BuscadorTablaComponent } from '../../../../buscador-tabla/buscador-tabla.component';
import { ColumnaBusqueda } from '../../../../../interfaces/utilidades/columna-busqueda.interface';
import { TicketService } from '../../../../../servicios/rest/ticket/ticket.service';
import { TagsEstados } from '../../../../../interfaces/utilidades/tags.interface';
import { FiltroItem } from '../../../../../interfaces/utilidades/filtro-item.interface';
import { Estados } from '../../../../../enums/estados';
import { Prioridad } from '../../../../../enums/prioridad';
import { IncidenciaService } from '../../../../../servicios/rest/incidencia/incidencia.service';

@Component({
  selector: 'app-tabla-pag-detalles-incidencias',
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
  templateUrl: './tabla-pag-detalles-incidencias.component.html',
  styleUrl: '../tabla-pag-detalles.component.css',
})
export class TablaPagDetallesIncidenciasComponent extends TablaPagEditarComponent {
  override entidad = 'Incidencia';
  override atributos = ['id', 'id'];
  override modal:string = 'modalDetallesIncidencia';
  override columnasBusqueda?: ColumnaBusqueda[] = [
    {
      name: 'Servicio',
      columnKey: 'servicio',
    },
    {
      name: 'Solicitud',
      columnKey: 'solicitud',
    },
    {
      name: 'Prioridad',
      columnKey: 'prioridad',
    },
  ];
  override columnas: ColumnItem[] = [
    {
      name: 'Servicio',
      attribute: 'servicio',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Solicitud',
      attribute: 'solicitud',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Prioridad',
      attribute: 'prioridad',
      showSort: true,
      sortFn: true,
      etiquetable: true,
      width: '100px',
    },
    {
      name: 'Estado',
      attribute: 'estado',
      showSort: true,
      sortFn: true,
      showFilter: true,
      filterFn: true,
      listOfFilter: [],
      etiquetable: true,
      width: '100px',
    },
    {
      name: 'Enviado',
      attribute: 'fecha_incidencia',
      width: '115px',
      showSort: true,
      sortFn: true,
      pipe: { nombre: 'date', datos: ['dd/MM/yyyy'] },
    },
    {
      name: 'Resuelto',
      attribute: 'fecha_resolucion',
      width: '115px',
      showSort: true,
      sortFn: true,
      pipe: { nombre: 'date', datos: ['dd/MM/yyyy'] },
    },
    {
      name: 'Acciones',
      width: '100px',
      right: true,
    }
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
    servicio: IncidenciaService,
    modalService:ModalService
  ) {
    super(msgService, pipeService, servicio, modalService);
    this.filtrosExternos.next(true);
    this.filtrosInternos.next(true);
  }
}
