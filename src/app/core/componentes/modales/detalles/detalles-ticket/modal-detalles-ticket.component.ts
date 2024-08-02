import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { InputComponent } from '../../../controles/form/input/input.component';
import { ModalComponent } from '../../modal.component';
import { FormatoTicketComponent } from './formato-ticket/formato-ticket.component';

@Component({
    selector: 'app-modal-detalles-ticket',
    standalone: true,
    templateUrl: './modal-detalles-ticket.component.html',
    styleUrl: '../../modal.component.css',
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
        FormatoTicketComponent,
    ]
})
export class ModalDetallesTicketComponent extends ModalComponent {
  override ancho: number = 720;
  @Input() id?: number;
  
}
