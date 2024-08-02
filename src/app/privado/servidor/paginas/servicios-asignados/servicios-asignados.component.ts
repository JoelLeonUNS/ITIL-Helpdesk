import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ModalService } from '../../../../core/servicios/modal/modal.service';
import { TablaPagDetallesServiciosComponent } from "../../../../core/componentes/tablas/paginada/detalles/servicios/tabla-pag-detalles-servicios.component";
import { ControlExportacionServicioComponent } from "../../../../core/componentes/control-exportacion/servicio/control-exportacion-servicio.component";

@Component({
  selector: 'app-servicios-asignados',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonComponent,
    FormsModule,
    NzFlexModule,
    NzDividerModule,
    NzIconModule,
    NzPageHeaderModule,
    TablaPagDetallesServiciosComponent,
    ControlExportacionServicioComponent
],
  templateUrl: './servicios-asignados.component.html',
  styleUrl: './servicios-asignados.component.css',
  providers: [ModalService]
})
export class ServiciosAsignadosComponent {
  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(private modalService: ModalService) {}
}
