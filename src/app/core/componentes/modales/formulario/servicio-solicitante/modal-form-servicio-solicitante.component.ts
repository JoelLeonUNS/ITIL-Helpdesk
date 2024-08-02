import { CommonModule, DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ModalFormComponent } from '../modal-form.component';
import { InputComponent } from '../../../controles/form/input/input.component';
import { AutenticacionService } from '../../../../servicios/rest/autenticacion/autenticacion.service';
import { SelectComponent } from "../../../controles/form/select/select.component";
import { TextAreaComponent } from "../../../controles/no-form/text-area/text-area.component";
import { TextAreaComponent as TextAreaFormComponent } from "../../../controles/form/text-area/text-area.component";
import { IncidenciaService } from '../../../../servicios/rest/incidencia/incidencia.service';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ServicioResponsableService } from '../../../../servicios/rest/servicio-responsable/servicio-responsable.service';
import { ServicioSolicitanteService } from '../../../../servicios/rest/servicio-solicitante/servicio-solicitante.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TagsEstados } from '../../../../interfaces/utilidades/tags.interface';
import { Estados } from '../../../../enums/estados';

@Component({
    selector: 'app-modal-form-servicio-solicitante',
    standalone: true,
    templateUrl: './modal-form-servicio-solicitante.component.html',
    styleUrl: '../modal-form.component.css',
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
export class ModalFormServicioSolicitanteComponent extends ModalFormComponent {
  
  protected override modalForm = this.fb.group({
    servicio_id: [null],
    solicitante_id: [null],
    sol_calificacion: [0],
    comentario: [null],
  });

  constructor(
    msgService: NzMessageService,
    servicio: ServicioSolicitanteService,
    fb: NonNullableFormBuilder,
    private datePipe: DatePipe,
    private autenticacionService: AutenticacionService,
    private servicioResponsable: ServicioResponsableService,
    public incidenciaService: IncidenciaService
  ) {
    super(msgService, servicio, fb);
  }

  tags: TagsEstados = {
    [Estados.ENVIADO]: { color: 'blue' },
    [Estados.EN_PROCESO]: { color: 'orange' },
    [Estados.ABIERTO]: { color: 'red' },
    [Estados.RESUELTO]: { color: 'green' },
  };

  ngOnInit(): void {
    this.servicioResponsable.obtenerResponsables(this.item.id).subscribe((responsables) => {
      this.item.responsables = responsables;
    });
  }

  override enviarNuevo(): void {
    const formParseado = this.crearFormParseado();
    super.enviarNuevo(formParseado);
  }

  override enviarEditado(): void {
    const formParseado = this.crearFormParseado();
    super.enviarEditado(formParseado);
  }

  private crearFormParseado(): FormGroup {
    let formParseado: FormGroup = this.modalForm;
    formParseado.setValue(this.modalForm.getRawValue());

    formParseado.get('servicio_id')?.setValue(this.item.id);
    formParseado.get('fecha_incidencia')?.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
    formParseado.get('fecha_resolucion')?.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
    formParseado.get('solicitante_id')?.setValue(this.autenticacionService.obtenerIdUsuario());
    return formParseado;
  }

}
