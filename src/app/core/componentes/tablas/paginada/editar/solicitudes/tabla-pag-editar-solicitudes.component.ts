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
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FiltroItem } from '../../../../../interfaces/utilidades/filtro-item.interface';
import { TagsEstados } from '../../../../../interfaces/utilidades/tags.interface';
import { IncidenciaService } from '../../../../../servicios/rest/incidencia/incidencia.service';
import { Estados } from '../../../../../enums/estados';

@Component({
  selector: 'app-tabla-pag-editar-solicitudes',
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
  templateUrl: './tabla-pag-editar-solicitudes.component.html',
  styleUrl: '../tabla-pag-editar.component.css',
})
export class TablaPagEditarSolicitudesComponent extends TablaPagEditarComponent {
  override entidad = 'Solicitud';
  override modal = 'modalDetallesSolicitudes';
  override columnasBusqueda?: ColumnaBusqueda[] = [
    {
      name: 'Id',
      columnKey: 'id',
      type: 'NUMBER',
    },
    {
      name: 'Tipo',
      columnKey: 'tipo',
    },
    {
      name: 'Prioridad',
      columnKey: 'prioridad',
    },
    {
      name: 'Enviado',
      columnKey: 'fecha_incidencia',
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
      width: '200px',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Estado',
      attribute: 'estado',
      showSort: true,
      sortFn: true,
      showFilter: true,
      filterFn: true,
      listOfFilter: [],
      width: '100px',
      etiquetable: true,
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
      name: 'Acción',
      width: '150px',
      right: true,
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
    [Estados.ENVIADO]: { color: 'blue' },
    [Estados.EN_PROCESO]: { color: 'orange' },
    [Estados.ABIERTO]: { color: 'red' },
    [Estados.RESUELTO]: { color: 'green' },
  };

  constructor(
    msgService: NzMessageService,
    pipeService: PipeService,
    servicio: IncidenciaService,
    modalService:ModalService,
    private datePipe: DatePipe,
  ) {
    super(msgService, pipeService, servicio, modalService);
    this.filtrosExternos.next(true);
    this.filtrosInternos.next(true);
  }

  cambiarPrioridad(item: any) {
    let itemUpdate = {
      prioridad: item.prioridad,
    };
    this.servicio.parcialActualizar(item.id, itemUpdate).subscribe(() => {
      this.msgService.success('Prioridad actualizada');
    });
  }

  resolver(item: any) {
    item.estado = Estados.RESUELTO;
    item.fecha_resolucion = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    let itemUpdate = {
      estado: item.estado,
      fecha_resolucion: item.fecha_resolucion,
    };

    this.servicio.parcialActualizar(item.id, itemUpdate).subscribe(() => {
      this.msgService.success('Solicitud resuelta');
    });
  }

  cancelar() {
    this.msgService.info('Operación cancelada');
  }

}
