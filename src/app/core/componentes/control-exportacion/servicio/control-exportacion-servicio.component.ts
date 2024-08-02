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
import { ServicioService } from '../../../servicios/rest/servicio/servicio.service';

@Component({
  selector: 'app-control-exportacion-servicio',
  standalone: true,
  imports: [NzDropDownModule, NzButtonModule, NzFlexModule, NzIconModule],
  templateUrl: '../control-exportacion.component.html',
  styleUrl: '../control-exportacion.component.css',
})
export class ControlExportacionServicioComponent extends ControlExportacionComponent {
  constructor(
    pipeService: PipeService,
    generadorExcelService: GeneradorExcelService,
    genradorPdfService: GeneradorPdfService,
    servicio: ServicioService
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
      encabezado: 'Nombre',
      atributo: 'nombre',
      ancho: 'auto',
    },
    {
      encabezado: 'Descripción',
      atributo: 'descripcion',
      ancho: 'auto',
    },
    {
      encabezado: 'Prioridad',
      atributo: 'prioridad',
      ancho: 'auto',
    },
    {
      encabezado: 'Tiempo de Resolución',
      atributo: 'tiempo_resolucion',
      ancho: 'auto',
    },
    {
      encabezado: 'Calificación',
      atributo: 'serv_calificacion',
      ancho: 'auto',
    }
  ]
  
  override parametrosPdf:ParametrosPdf  = {
    titulo: 'Listado de Servicios de HelpDesk',
    mostrarTitulo: true,
    columnasTabla: this.columnasTabla, 
    mostrarPiePagina: true,
    contenidoPiePagina: 'Sistema HelpDesk - Dirección de Atención',
    contenidoEncabezado: 'Listado de Servicios',
    mostrarEncabezado: true,
  }
  
  override parametrosExcel:ParametrosExcel = {
    titulo: 'Listado de Servicios de HelpDesk',
    columnasTabla: this.columnasTabla,
  }

}
