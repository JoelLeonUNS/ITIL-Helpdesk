import { TicketPriority } from "../../enums/ticket-priority";
import { TicketStatus } from "../../enums/ticket-status";
import { RequestType } from "./request-type.interface";
import { User } from "./user.interface";

export interface Ticket {
  id: number;
  type: RequestType;
  user: User;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  created_at: Date;
  updated_at: Date;
}
