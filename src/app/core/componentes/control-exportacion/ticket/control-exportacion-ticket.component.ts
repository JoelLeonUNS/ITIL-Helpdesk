import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { ControlExportacionComponent } from '../control-exportacion.component';
import { GeneradorExcelService } from '../../../servicios/exportar/exportar-excel/generador-excel.service';
import { GeneradorPdfService } from '../../../servicios/exportar/exportar-pdf/context/generador-pdf.service';
import { ColumnaTabla } from '../../../interfaces/utilidades/columna-tabla.interface';
import { ParametrosExcel } from '../../../interfaces/utilidades/parametros-excel.interface';
import { ParametrosPdf } from '../../../interfaces/utilidades/parametros-pdf.interface';
import { PipeService } from '../../../servicios/utilidades/pipe/pipe.service';
import { TicketService } from '../../../servicios/rest/ticket/ticket.service';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-control-exportacion-ticket',
  standalone: true,
  imports: [NzDropDownModule, NzButtonModule, NzFlexModule, NzIconModule],
  templateUrl: '../control-exportacion.component.html',
  styleUrl: '../control-exportacion.component.css',
})
export class ControlExportacionTicketComponent extends ControlExportacionComponent {
  constructor(
    pipeService: PipeService,
    generadorExcelService: GeneradorExcelService,
    genradorPdfService: GeneradorPdfService,
    servicio: TicketService
  ) {
    super(pipeService,generadorExcelService, genradorPdfService, servicio);
  }

  columnasTabla: ColumnaTabla[] = [
    { 
      encabezado: 'Nro', 
      atributo: 'id', 
      ancho: 33, 
    },
    { 
      encabezado: 'Tipo',
      atributo: 'type',
      ancho: 'auto',
    },
    {
      encabezado: 'Descripción',
      atributo: 'description',
      ancho: 'auto',
    },
    {
      encabezado: 'Nombre',
      atributo: 'name',
      ancho: 'auto',
    },
    {
      encabezado: 'Apellido',
      atributo: 'surname',
      ancho: 'auto',
    },
    {
      encabezado: 'Rol',
      atributo: 'role',
      ancho: 'auto',
    },
    {
      encabezado: 'Prioridad',
      atributo: 'priority',
      ancho: 'auto',
    },
    {
      encabezado: 'Estado',
      atributo: 'status',
      ancho: 'auto',
    },
    {
      encabezado: 'Fecha de Creación',
      atributo: 'created_at',
      ancho: 'auto',
      pipe: { nombre: 'date', datos: ['dd/MM/yyyy'] }
    }

  ]
  
  override parametrosPdf:ParametrosPdf  = {
    titulo: 'Listado de Tickets de HelpDesk',
    mostrarTitulo: true,
    orientacion: 'landscape',
    columnasTabla: this.columnasTabla, 
    mostrarPiePagina: true,
    contenidoPiePagina: 'Sistema HelpDesk - Dirección de Atención',
    contenidoEncabezado: 'Listado de Tickets',
    mostrarEncabezado: true,
  }
  
  override parametrosExcel:ParametrosExcel = {
    titulo: 'Listado de Tickets de HelpDesk',
    columnasTabla: this.columnasTabla,
  }

}
