import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalService } from '../../../core/servicios/modal/modal.service';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { TablaPagEditarSolicitudesComponent } from '../../../core/componentes/tablas/paginada/editar/solicitudes/tabla-pag-editar-solicitudes.component';
import { ControlExportacionsolicitudComponent } from '../../../core/componentes/control-exportacion/solicitud/control-exportacion-solicitud.component';

@Component({
    selector: 'app-tickets-admin',
    standalone: true,
    templateUrl: './tickets-admin.component.html',
    styleUrl: './tickets-admin.component.css',
    providers: [ModalService],
    imports: [
        CommonModule,
        NzButtonComponent,
        FormsModule,
        ReactiveFormsModule,
        NzGridModule,
        NzFlexModule,
        NzDividerModule,
        NzIconModule,
        NzStatisticModule,
        NzTagModule,
        NzSpaceModule,
        NzPageHeaderModule,
        TablaPagEditarSolicitudesComponent,
        ControlExportacionsolicitudComponent
    ]
})
export class TicketsAdminComponent {
  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(
  ) {
    
  }
}
