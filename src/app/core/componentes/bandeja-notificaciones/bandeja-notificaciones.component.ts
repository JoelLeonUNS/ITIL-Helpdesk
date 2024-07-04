import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AlertaTicketService } from '../../servicios/utilidades/alerta-ticket/alerta-ticket.service';
import { NotificacionService } from '../../servicios/rest/notificacion/notificacion.service';
import { TicketService } from '../../servicios/rest/ticket/ticket.service';

@Component({
  selector: 'app-bandeja-notificaciones',
  standalone: true,
  imports: [
    NzBadgeModule,
    NzPopoverModule,
    NzListModule,
    NzIconModule,
    NzButtonModule,
  ],
  templateUrl: './bandeja-notificaciones.component.html',
  styleUrl: './bandeja-notificaciones.component.css',
})
export class BandejaNotificacionesComponent {
  notifications: any[] = [];

  constructor(
    private alertaTicketService: AlertaTicketService,
    private notificacionService: NotificacionService,
  ) {}

  ngOnInit(): void {
    // Verificar tickets periódicamente (por ejemplo, cada hora)
    setInterval(() => {
      this.alertaTicketService.alertarTicket();
    }, 3600000); // 1 hora en milisegundos (3600000)
    this.listarNotificaciones();
    this.alertaTicketService.ticketExpired$.subscribe((notification) => {
      if (notification) {
        this.guardarNotificacion(notification);
      }
    });
  }

  listarNotificaciones(): void {
    this.notificacionService.obtenerTodos().subscribe((notifications) => {
      this.notifications = notifications;
    });
  }

  guardarNotificacion(notification: any): void {
    this.notificacionService.crear(notification).subscribe(() => {
      this.notifications.push(notification);
    });
  }

  borrar(item: any): void {
    this.notificacionService.eliminar(item.id).subscribe(() => {
      this.notifications = this.notifications.filter((n) => n.id !== item.id);
    });
  }
}
