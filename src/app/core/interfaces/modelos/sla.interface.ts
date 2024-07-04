import { TicketPriority } from "../../enums/ticket-priority";

export interface SLA {
    id: number;
    priority: TicketPriority;
    resolutionTime: number; // in hours
}