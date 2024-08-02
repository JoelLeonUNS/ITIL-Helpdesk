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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IncidenciaService } from '../../../servicios/rest/incidencia/incidencia.service';

@Component({
  selector: 'app-control-exportacion-solicitud',
  standalone: true,
  imports: [NzDropDownModule, NzButtonModule, NzFlexModule, NzIconModule],
  templateUrl: '../control-exportacion.component.html',
  styleUrl: '../control-exportacion.component.css',
})
export class ControlExportacionsolicitudComponent extends ControlExportacionComponent {
  constructor(
    pipeService: PipeService,
    generadorExcelService: GeneradorExcelService,
    genradorPdfService: GeneradorPdfService,
    servicio: IncidenciaService
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
      encabezado: 'Servicio',
      atributo: 'servicio',
      ancho: 'auto',
    },
    {
      encabezado: 'Descripción',
      atributo: 'descripcion',
      ancho: 'auto',
    },
    {
      encabezado: 'Nombres',
      atributo: 'nombres',
      ancho: 'auto',
    },
    {
      encabezado: 'Apellidos',
      atributo: 'apellidos',
      ancho: 'auto',
    },
    {
      encabezado: 'Prioridad',
      atributo: 'prioridad',
      ancho: 'auto',
    },
    {
      encabezado: 'Estado',
      atributo: 'estado',
      ancho: 'auto',
    },
    {
      encabezado: 'Fecha de Envío',
      atributo: 'fecha_incidencia',
      ancho: 'auto',
      pipe: { nombre: 'date', datos: ['dd/MM/yyyy'] }
    },
    {
      encabezado: 'Fecha de Resolución',
      atributo: 'fecha_resolucion',
      ancho: 'auto',
      pipe: { nombre: 'date', datos: ['dd/MM/yyyy'] }
    }

  ]
  
  override parametrosPdf:ParametrosPdf  = {
    titulo: 'Listado de Solicitudes de HelpDesk',
    mostrarTitulo: true,
    orientacion: 'landscape',
    columnasTabla: this.columnasTabla, 
    mostrarPiePagina: true,
    contenidoPiePagina: 'Sistema HelpDesk - Dirección de Atención',
    contenidoEncabezado: 'Listado de Solicitudes',
    mostrarEncabezado: true,
  }
  
  override parametrosExcel:ParametrosExcel = {
    titulo: 'Listado de Solicitudes de HelpDesk',
    columnasTabla: this.columnasTabla,
  }

}
