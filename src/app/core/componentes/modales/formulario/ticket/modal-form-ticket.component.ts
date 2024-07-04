import { CommonModule, DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { TicketService } from '../../../../servicios/rest/ticket/ticket.service';
import { TicketStatus } from '../../../../enums/ticket-status';
import { AutenticacionService } from '../../../../servicios/rest/autenticacion/autenticacion.service';
import { SolicitudService } from '../../../../servicios/rest/solicitud/solicitudes.service';
import { SelectComponent } from "../../../controles/form/select/select.component";
import { TicketPriority } from '../../../../enums/ticket-priority';
import { TextAreaComponent } from "../../../controles/form/text-area/text-area.component";

@Component({
    selector: 'app-modal-form-ticket',
    standalone: true,
    templateUrl: './modal-form-ticket.component.html',
    styleUrl: '../modal-form.component.css',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NzFormModule,
        InputComponent,
        NzModalModule,
        NzButtonModule,
        NzRadioModule,
        NzSelectModule,
        NzDatePickerModule,
        NzGridModule,
        SelectComponent,
        TextAreaComponent
    ]
})
export class ModalFormTicketComponent extends ModalFormComponent {
  
  ticketStatus?: TicketStatus = TicketStatus.Sent;
  ticketPriority?: TicketPriority = TicketPriority.Low;
  

  protected override modalForm = this.fb.group({
    type: [null, [Validators.required]],
    user: [null],
    description: [null, [Validators.required]],
    priority: [this.ticketPriority, [Validators.required]],
    status: [this.ticketStatus],
    created_at: [null],
    updated_at: [null],
  });

  constructor(
    msgService: NzMessageService,
    servicio: TicketService,
    fb: NonNullableFormBuilder,
    private datePipe: DatePipe,
    private autenticacionService: AutenticacionService,
    public solicitudService: SolicitudService
  ) {
    super(msgService, servicio, fb);
  }

  override enviarNuevo(): void {
    const formParseado = this.crearFormParseado();
    super.enviarNuevo(formParseado);
  }

  private crearFormParseado(): FormGroup {
    let formParseado: FormGroup = this.modalForm;
    formParseado.setValue(this.modalForm.getRawValue());

    formParseado.get('created_at')?.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
    formParseado.get('updated_at')?.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
    formParseado.get('user')?.setValue(this.autenticacionService.obtenerIdUsuario());
    return formParseado;
  }

}
