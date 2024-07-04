export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    role: 'Estudiante' | 'Profesor' | 'Admin';
  }