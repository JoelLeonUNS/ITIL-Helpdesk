import { Component, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subject, debounceTime, tap, catchError, of, map } from 'rxjs';
import { ColumnaBusqueda } from '../../interfaces/utilidades/columna-busqueda.interface';
import { ParametroPaginado } from '../../interfaces/utilidades/parametro-paginado';
import { ServicioCrud } from '../../servicios/rest/servicio-crud';
import { PipeService } from '../../servicios/utilidades/pipe/pipe.service';
import { BuscadorTablaComponent } from "../buscador-tabla/buscador-tabla.component";
import { TarjetaServicioComponent } from "../tarjeta-servicio/tarjeta-servicio.component";
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ColumnaOrden } from '../../interfaces/utilidades/columna-orden.interface';

@Component({
  selector: 'app-mosaico-tarjeta',
  standalone: true,
  imports: [
    CommonModule,
    NzFlexModule,
    NzGridModule,
    NzEmptyModule,
    NzSpinModule,
    NzPaginationModule,
    BuscadorTablaComponent, 
    TarjetaServicioComponent
  ],
  template: '',
})
export class MosaicoTarjetaComponent {
  @Input() scroll?: any;
  @Input() columnasBusqueda?: ColumnaBusqueda[];
  @Input() columnasOrden?: ColumnaOrden[];

  datos$?: Observable<any[]>;
  datos: any[] = [];
  parametrosPag: ParametroPaginado = {
    pageIndex: 1,
    pageSize: 10,
    sortField: null,
    sortOrder: null,
    searchTerm: '',
    searchColumn: 'id',
    filter: [],
  };
  total = 1;
  loading = true;
  busqueda = new Subject<string>();

  constructor(
    protected msgService: NzMessageService,
    protected pipeService: PipeService,
    protected servicio: ServicioCrud<any>
  ) {
    this.busqueda.pipe(debounceTime(500)).subscribe((termino) => {
      this.parametrosPag.pageIndex = 1;
      this.parametrosPag.searchTerm = termino;
      this.cargarDatosServidor();
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cargarDatosServidor();
    this.columnasOrden == null ? this.columnasOrden = this.columnasBusqueda : this.columnasOrden;
  }

  cargarDatosServidor(): void {
    this.loading = true;
    this.datos$ = this.servicio?.obtenerTodoPag(this.parametrosPag).pipe(
      tap(d => {
        this.manejarRespuesta(d);
      }),
      catchError(error => {
        this.manejarError(error);
        return of(null);
      }),
      map(d => d.data)
    );
  }

  manejarRespuesta(respuesta: any): void {
    this.datos = respuesta.data;
    this.total = respuesta.total;
    this.loading = false;
  }

  manejarError(error: any): void {
    this.msgService.error('Error en la solicitud');
    console.error('Error en la solicitud:', error);
    this.loading = false;
  }

  ordenarPor(columnKey: string): void {
    this.parametrosPag.sortField = columnKey;
    this.cargarDatosServidor();
  }

  cambiarOrden(orden: string): void {
    this.parametrosPag.sortOrder = orden;
    this.cargarDatosServidor();
  }

  cambiarTamanoPagina(tamano: number): void {
    this.parametrosPag.pageSize = tamano;
    this.cargarDatosServidor();
  }
}
