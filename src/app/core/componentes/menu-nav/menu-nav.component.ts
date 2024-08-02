import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuItem } from '../../interfaces/utilidades/menu-item.interface';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  imports: [
    NzIconModule,
    NzMenuModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-nav.component.html',
  styleUrl: './menu-nav.component.css'
})
export class MenuNavComponent {
  @Input() rol_id?:number;
  
  menus: MenuItem[] = [   
    // Admin
    {
      level: 1,
      title: 'Usuarios',
      icon: 'user',
      routerLink: '/admin/usuarios',
      accesoRol: [1],
    },
    {
      level: 1,
      title: 'Servicios',
      icon: 'appstore',
      routerLink: '/admin/servicios',
      accesoRol: [1],
    },
    // Solicitante
    {
      level: 1,
      title: 'Servicios',
      icon: 'appstore',
      routerLink: '/solicitante/servicios',
      accesoRol: [3],
    },
    {
      level: 1,
      title: 'Incidencias',
      icon: 'alert',
      routerLink: '/solicitante/incidencias',
      accesoRol: [3],
    },
    // Servidor
    {
      level: 1,
      title: 'Solicitudes',
      icon: 'inbox',
      routerLink: '/servidor/solicitudes',
      accesoRol: [2],
    },
    {
      level: 1,
      title: 'Servicios Asignados',
      icon: 'appstore',
      routerLink: '/servidor/servicios',
      accesoRol: [2],
    },
  ]
}
