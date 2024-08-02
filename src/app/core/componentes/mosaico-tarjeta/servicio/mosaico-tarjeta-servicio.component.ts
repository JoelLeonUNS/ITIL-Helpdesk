import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PipeService } from '../../../servicios/utilidades/pipe/pipe.service';
import { TarjetaServicioComponent } from '../../tarjeta-servicio/tarjeta-servicio.component';
import { BuscadorTablaComponent } from '../../buscador-tabla/buscador-tabla.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { MosaicoTarjetaComponent } from '../mosaico-tarjeta.component';
import { ModalService } from '../../../servicios/modal/modal.service';
import { ServicioService } from '../../../servicios/rest/servicio/servicio.service';
import { ColumnaBusqueda } from '../../../interfaces/utilidades/columna-busqueda.interface';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { OrganizadorFicheroComponent } from "../../organizador-fichero/organizador-fichero.component";

@Component({
  selector: 'app-mosaico-tarjeta-servicio',
  standalone: true,
  imports: [
    CommonModule,
    NzFlexModule,
    NzGridModule,
    NzEmptyModule,
    NzSpinModule,
    NzPaginationModule,
    BuscadorTablaComponent,
    TarjetaServicioComponent,
    OrganizadorFicheroComponent
],
  templateUrl: '../mosaico-tarjeta.component.html',
  styleUrl: '../mosaico-tarjeta.component.css',
  providers: [ModalService]
})
export class MosaicoTarjetaServicioComponent extends MosaicoTarjetaComponent {

  override columnasBusqueda?: ColumnaBusqueda[] = [
    {
      name: 'Id',
      columnKey: 'id',
      type: 'NUMBER',
      default: true
    },
    {
      name: 'Nombre',
      columnKey: 'nombre',
    },
    {
      name: 'Descripción',
      columnKey: 'descripcion',
    },
    {
      name: 'Tiempo de resolución',
      columnKey: 'tiempo_resolucion',
      type: 'NUMBER'
    }
  ];
  
  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor( 
    msgService: NzMessageService, 
    pipeService: PipeService, 
    servicio: ServicioService,
    protected modalService:ModalService
  ) {
    super(msgService, pipeService, servicio);
  }

  abrirModal(item:any) {
    this.modalService.insertarModalCrear(this.vcr, 'modalFormIncidencia');
    this.modalService.obtenerInstancia().mostrarValores(item);
    this.modalService.obtenerInstancia().onConfirmar.subscribe(() => {
      this.cargarDatosServidor();
    });
  }

}
