import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageService } from 'ng-zorro-antd/message';
import { InputComponent } from '../../../controles/form/input/input.component';
import { SelectComponent } from "../../../controles/form/select/select.component";
import { TextAreaComponent } from "../../../controles/no-form/text-area/text-area.component";
import { TextAreaComponent as TextAreaFormComponent } from "../../../controles/form/text-area/text-area.component";
import { IncidenciaService } from '../../../../servicios/rest/incidencia/incidencia.service';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ServicioSolicitanteService } from '../../../../servicios/rest/servicio-solicitante/servicio-solicitante.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ModalDetallesComponent } from '../modal-detalles.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TagsEstados } from '../../../../interfaces/utilidades/tags.interface';
import { Estados } from '../../../../enums/estados';

@Component({
    selector: 'app-modal-detalles-solicitudes',
    standalone: true,
    templateUrl: './modal-detalles-solicitudes.component.html',
    styleUrl: '../modal-detalles.component.css',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        InputComponent,
        NzModalModule,
        NzDividerModule,
        NzButtonModule,
        NzRadioModule,
        NzSelectModule,
        NzDatePickerModule,
        NzGridModule,
        NzRateModule,
        NzTagModule,
        SelectComponent,
        TextAreaComponent,
        TextAreaFormComponent
    ]
})
export class ModalDetallesSolicitudesComponent extends ModalDetallesComponent {
  
  constructor(
    msgService: NzMessageService,
    servicio: ServicioSolicitanteService,
    fb: NonNullableFormBuilder,
    public incidenciaService: IncidenciaService
  ) {
    super(msgService, servicio, fb);
  }

  tags: TagsEstados = {
    [Estados.ENVIADO]: { color: 'blue' },
    [Estados.EN_PROCESO]: { color: 'orange' },
    [Estados.ABIERTO]: { color: 'red' },
    [Estados.RESUELTO]: { color: 'green' },
  }

  ngOnInit(): void {
    this.incidenciaService.obtenerSolicitante(this.item.id).subscribe((solicitante) => {
      this.item.solicitante = solicitante.nombres + ' ' + solicitante.apellidos;
      this.item.sol_correo = solicitante.correo;
    });
  }
}
