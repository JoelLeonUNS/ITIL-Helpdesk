import { Component, Input } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { TicketService } from '../../../../../servicios/rest/ticket/ticket.service';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { MonedaPipe } from '../../../../../pipes/moneda/moneda.pipe';
import { TicketItem } from '../../../../../interfaces/utilidades/ticket-item.interface';
import { PipeService } from '../../../../../servicios/utilidades/pipe/pipe.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { IncidenciaService } from '../../../../../servicios/rest/incidencia/incidencia.service';

@Component({
  selector: 'app-formato-ticket',
  standalone: true,
  imports: [
    MonedaPipe, 
    NzFlexModule, 
    NzListModule, 
    NzSpinModule, 
    NzDividerModule,
  ],
  templateUrl: './formato-ticket.component.html',
  styleUrl: './formato-ticket.component.css',
})

export class FormatoTicketComponent {
  @Input() id?: number = 1;
  @Input() labels: TicketItem[] = [
    {
      name: 'ID',
      attribute: 'id',
    },
    {
      name: 'NOMBRES',
      attribute: 'name',
    },
    {
      name: 'APELLIDOS',
      attribute: 'surname',
    },
    {
      name: 'ROL',
      attribute: 'role',
    },
    {
      name: 'TIPO',
      attribute: 'type',
    },
    {
      name: 'DESCRIPCION',
      attribute: 'description',
    },
    {
      name: 'ESTADO',
      attribute: 'status',
    },
    {
      name: 'PRIORIDAD',
      attribute: 'priority',
    },
    {
      name: 'CREADO',
      attribute: 'created_at',
      pipe: {nombre: 'date', datos: ['dd/MM/yyyy']}
    },
    {
      name: 'ACTUALIZADO',
      attribute: 'updated_at',
      pipe: {nombre: 'date', datos: ['dd/MM/yyyy']}
    },
  ];

 
  @Input() borde:boolean = false;
  items: any = {};
  atributos: any[] = [];
  cargando = true;

  constructor(protected servicio: IncidenciaService, private pipeService:PipeService) {}

  ngOnInit(): void {
    this.servicio.obtenerPorId(this.id!).subscribe({
      next: (data) => {
        this.items = data;
        this.atributos = Object.keys(this.labels);
        this.cargando = false;
      },
      error: (error) => {
        console.error(error);
        this.cargando = false;
      },
    });
  }

  transPipe(dato: any, pipe: any): string | null {
    if (pipe) {
      return this.pipeService.transformar(dato, pipe);
    } else {
      return dato;
    }
  }
}
