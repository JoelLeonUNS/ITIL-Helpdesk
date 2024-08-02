import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../../../core/servicios/modal/modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { MosaicoTarjetaServicioComponent } from '../../../../core/componentes/mosaico-tarjeta/servicio/mosaico-tarjeta-servicio.component';

@Component({
  selector: 'app-solicitar-servicios',
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
    MosaicoTarjetaServicioComponent
  ],
  templateUrl: './solicitar-servicios.component.html',
  styleUrl: './solicitar-servicios.component.css',
  providers: [ModalService]
})
export class SolicitarServiciosComponent {
  @ViewChild('vcrModal', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  abrirModal() {
    this.modalService.insertarModalCrear(this.vcr, 'modalFormIncidencia');
  }
}
