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
import { TextAreaComponent } from "../../../controles/form/text-area/text-area.component";
import { IncidenciaService } from '../../../../servicios/rest/incidencia/incidencia.service';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ServicioResponsableService } from '../../../../servicios/rest/servicio-responsable/servicio-responsable.service';
import { ServicioSolicitanteService } from '../../../../servicios/rest/servicio-solicitante/servicio-solicitante.service';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TagsEstados } from '../../../../interfaces/utilidades/tags.interface';
import { Prioridad } from '../../../../enums/prioridad';

@Component({
    selector: 'app-modal-form-incidencia',
    standalone: true,
    templateUrl: './modal-form-incidencia.component.html',
    styleUrl: '../modal-form.component.css',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        InputComponent,
        NzModalModule,
        NzButtonModule,
        NzRadioModule,
        NzSelectModule,
        NzDatePickerModule,
        NzGridModule,
        NzRateModule,
        NzTagModule,
        SelectComponent,
        TextAreaComponent
    ]
})
export class ModalFormIncidenciaComponent extends ModalFormComponent {
  
  protected override modalForm = this.fb.group({
    servicio_id: [null],
    solicitante_id: [null],
    solicitud: [null, [Validators.required]],
    fecha_incidencia: [new Date()],
    fecha_resolucion: [null],
    estado: ['ENVIADO'],
    prioridad: [null],
  });

  constructor(
    msgService: NzMessageService,
    servicio: IncidenciaService,
    fb: NonNullableFormBuilder,
    private datePipe: DatePipe,
    private autenticacionService: AutenticacionService,
    private servicioResponsable: ServicioResponsableService,
    private servicioSolicitante: ServicioSolicitanteService,
    public incidenciaService: IncidenciaService
  ) {
    super(msgService, servicio, fb);
  }

  ngOnInit(): void {
    this.servicioResponsable.obtenerResponsables(this.item.id).subscribe((responsables) => {
      this.item.responsables = responsables;
    }); 
  }

  tags: TagsEstados = {
    [Prioridad.BAJA]: { color: 'green' },
    [Prioridad.MEDIA]: { color: 'orange' },
    [Prioridad.ALTA]: { color: 'red' },
  };

  override enviarNuevo(): void {
    const servicioSolicitante = {
      servicio_id: this.item.id,
      solicitante_id: this.autenticacionService.obtenerIdUsuario(),
      sol_calificacion: 0,
      comentario: ''
    }
    this.servicioSolicitante.crear(servicioSolicitante).subscribe();
    const formParseado = this.crearFormParseado();
    super.enviarNuevo(formParseado);
  }

  private crearFormParseado(): FormGroup {
    let formParseado: FormGroup = this.modalForm;
    formParseado.setValue(this.modalForm.getRawValue());

    formParseado.get('servicio_id')?.setValue(this.item.id);
    formParseado.get('fecha_incidencia')?.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
    formParseado.get('solicitante_id')?.setValue(this.autenticacionService.obtenerIdUsuario());
    return formParseado;
  }

}
