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
import { TagsEstados } from '../../../../../interfaces/utilidades/tags.interface';
import { FiltroItem } from '../../../../../interfaces/utilidades/filtro-item.interface';
import { Estados } from '../../../../../enums/estados';
import { Prioridad } from '../../../../../enums/prioridad';
import { ServicioService } from '../../../../../servicios/rest/servicio/servicio.service';
import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'app-tabla-pag-detalles-servicios',
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
    NzRateModule,
    BuscadorTablaComponent
  ],
  templateUrl: './tabla-pag-detalles-servicios.component.html',
  styleUrl: '../tabla-pag-detalles.component.css',
})
export class TablaPagDetallesServiciosComponent extends TablaPagEditarComponent {
  override entidad = 'Servicio';
  override atributos = ['id', 'id'];
  override modal:string = 'modalDetallesServicio';
  override columnasBusqueda?: ColumnaBusqueda[] = [
    {
      name: 'Nombre',
      columnKey: 'nombre',
    },
    {
      name: 'Descripcion',
      columnKey: 'descripcion'
    },
    {
      name: 'Prioridad',
      columnKey: 'prioridad',
    },
  ];
  override columnas: ColumnItem[] = [
    {
      name: 'Nro',
      attribute: 'id',
      showSort: true,
      sortFn: true, 
      width: '70px',
    },
    {
      name: 'Nombre',
      attribute: 'nombre',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Descripción',
      attribute: 'descripcion',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Prioridad',
      attribute: 'prioridad',
      showSort: true,
      sortFn: true,
      showFilter: true,
      filterFn: true,
      listOfFilter: [],
      etiquetable: true,
    },
    {
      name: 'Calificación',
      showSort: true,
      sortFn: true,
    },
    {
      name: 'Tiempo de resolución',
      attribute: 'tiempo_resolucion',
      showSort: true,
      sortFn: true,
    },
  ];
  override filtros: FiltroItem[] = [
    {
      attribute: 'prioridad',
      list: [
        { text: 'Baja', value: Prioridad.BAJA },
        { text: 'Media', value: Prioridad.MEDIA },
        { text: 'Alta', value: Prioridad.ALTA },
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
    servicio: ServicioService,
    modalService:ModalService
  ) {
    super(msgService, pipeService, servicio, modalService);
    this.filtrosExternos.next(true);
    this.filtrosInternos.next(true);
  }
}
