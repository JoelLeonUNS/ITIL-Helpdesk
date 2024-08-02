import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { TablaPagComponent } from '../tabla-pag.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ServicioCrud } from '../../../../servicios/rest/servicio-crud';
import { ModalService } from '../../../../servicios/modal/modal.service';
import { PipeService } from '../../../../servicios/utilidades/pipe/pipe.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { BuscadorTablaComponent } from '../../../buscador-tabla/buscador-tabla.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-tabla-pag-detalles',
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
    NzMenuModule,
    NzIconModule,
    NzFormModule,
    NzRadioModule,
    NzDividerModule,
    NzPaginationModule,
    NzTagModule,
    BuscadorTablaComponent
  ],
  templateUrl: './tabla-pag-detalles.component.html',
  styleUrl: './tabla-pag-detalles.component.css',
})
export class TablaPagEditarComponent extends TablaPagComponent {
  @Input() entidad = 'Ticket';
  @Input() atributos = ['id', 'id'];
  @Input() modal:string = '';

  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(
    msgService: NzMessageService,
    pipeService: PipeService,
    servicio:ServicioCrud<any>,
    protected modalService:ModalService
  ) {
    super(msgService, pipeService,servicio);
  }

  abrirModal(item:any) {
    this.modalService.insertarModalDetalles(this.vcr, this.modal, this.atributos, this.entidad, item);
    this.modalService.obtenerInstancia().onConfirmar.subscribe(() => {
      this.cargarDatosServidor();
    });
  }

}
