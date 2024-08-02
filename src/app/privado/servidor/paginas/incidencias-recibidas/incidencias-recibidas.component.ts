import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ControlExportacionsolicitudComponent } from '../../../../core/componentes/control-exportacion/solicitud/control-exportacion-solicitud.component';
import { ModalService } from '../../../../core/servicios/modal/modal.service';
import { TablaPagEditarSolicitudesComponent } from '../../../../core/componentes/tablas/paginada/editar/solicitudes/tabla-pag-editar-solicitudes.component';

@Component({
  selector: 'app-incidencias-recibidas',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonComponent,
    FormsModule,
    NzFlexModule,
    NzDividerModule,
    NzIconModule,
    NzPageHeaderModule,
    TablaPagEditarSolicitudesComponent,
    ControlExportacionsolicitudComponent
],
  templateUrl: './incidencias-recibidas.component.html',
  styleUrl: './incidencias-recibidas.component.css',
  providers: [ModalService]
})
export class IncidenciasRecibidasComponent {
  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(private modalService: ModalService) {}
}
