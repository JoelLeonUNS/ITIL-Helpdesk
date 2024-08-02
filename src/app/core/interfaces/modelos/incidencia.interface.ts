export interface Incidencia {
  id: number;
  servicio_id: number;
  solicitante_id: number;
  descripcion: string;
  fecha_incidencia: Date;
  fecha_resolucion: Date | null;
  prioridad: string;
  estado: string;
}
