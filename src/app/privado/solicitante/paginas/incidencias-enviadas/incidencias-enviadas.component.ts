import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TablaPagDetallesIncidenciasComponent } from "../../../../core/componentes/tablas/paginada/detalles/incidencias/tabla-pag-detalles-incidencias.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ModalService } from '../../../../core/servicios/modal/modal.service';

@Component({
  selector: 'app-incidencias-enviadas',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    NzFlexModule,
    NzDividerModule,
    NzIconModule,
    NzPageHeaderModule,
    TablaPagDetallesIncidenciasComponent],
  templateUrl: './incidencias-enviadas.component.html',
  styleUrl: './incidencias-enviadas.component.css',
  providers: [ModalService]
})
export class IncidenciasEnviadasComponent {
  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  abrirModal() {
    this.modalService.insertarModalCrear(this.vcr, 'modalFormIncidencia');
  }
}
