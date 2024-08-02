import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificacionService } from '../../rest/notificacion/notificacion.service';
import { TicketService } from '../../rest/ticket/ticket.service';

@Injectable({
  providedIn: 'root'
})

export class AlertaTicketService {
  notifications: any[] = [];
  constructor(
    private notificacionService: NotificacionService,
    private ticketService: TicketService
  ) { }
  
  private ticketExpiredSubject = new BehaviorSubject<any | null>(null);
  ticketExpired$ = this.ticketExpiredSubject.asObservable();
  private readonly EXPIRATION_DAYS = 15;

  checkTicketExpiration(ticket: any): void {
  const now = new Date();
  const expirationDate = new Date(ticket.created_at);
  expirationDate.setDate(expirationDate.getDate() + this.EXPIRATION_DAYS);
    if (now > expirationDate && ticket.status !== 'Cerrado') {
      const notification: any = {
        title: 'Ticket Vencido',
        description: `El ticket #${ticket.id} ha superado el plazo de respuesta de ${this.EXPIRATION_DAYS} días. Por favor, resuelva este ticket lo antes posible.`,
        id_ticket: ticket.id,
      };
      this.enviarNotificaciones(notification, ticket.id);
    }
  }

  enviarNotificaciones(notification:any, id_ticket:number): void {
    this.notificacionService.obtenerTodos().subscribe((notifications) => {
      this.notifications = notifications;
      // se comprueba si la notificación ya existe en la lista, viendo que no se repita el id del ticket
      if (!this.notifications.some((n) => n.id_ticket === id_ticket)) {
        this.notifications.push(notification);
        this.ticketExpiredSubject.next(notification);
      }
    });
  }

  alertarTicket(): void {
    this.ticketService.obtenerTodos().subscribe((tickets) => {
      tickets.forEach((ticket) => {
        this.checkTicketExpiration(ticket);
      });
    });
  }
    

}