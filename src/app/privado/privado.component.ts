import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CabeceraComponent } from "../core/componentes/cabecera/cabecera.component";

@Component({
    selector: 'app-privado',
    standalone: true,
    templateUrl: './privado.component.html',
    styleUrl: './privado.component.css',
    imports: [
        CommonModule,
        NzBreadCrumbModule,
        RouterOutlet,
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        NzToolTipModule,
        NzDividerModule,
        NzTypographyModule,
        NzDropDownModule,
        CabeceraComponent
    ]
})
export class PrivadoComponent {
  isCollapsed = false;
  cargando: boolean = false;

  rolUsuario?: string;
  nombreUsuario?: string;

  constructor(private msgService: NzMessageService, private router: Router) {}

  salir() {
    this.manejarRespuesta(null);
  }

  manejarRespuesta(respuesta: any): void {
    this.cargando = false;
    this.msgService.success('¡Se cerró sesión exitosamente!');
  }

  manejarError(errores: any): void {
    this.cargando = false;
    this.msgService.error('Ocurrió un error al cerrar sesión.');
    console.log(errores.error.errores);
  }
}
