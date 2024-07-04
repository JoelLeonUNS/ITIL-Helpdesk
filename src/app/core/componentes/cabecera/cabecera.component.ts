import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AutenticacionService } from '../../servicios/rest/autenticacion/autenticacion.service';
import { UsuarioService } from '../../servicios/rest/usuario/usuario.service';
import { BandejaNotificacionesComponent } from "../bandeja-notificaciones/bandeja-notificaciones.component";
import { TokenService } from '../../servicios/token/token.service';

@Component({
    selector: 'app-cabecera',
    standalone: true,
    templateUrl: './cabecera.component.html',
    styleUrl: './cabecera.component.css',
    imports: [
        NzDividerModule,
        NzAvatarModule,
        NzIconModule,
        NzDropDownModule,
        BandejaNotificacionesComponent
    ]
})
export class CabeceraComponent {  
  cargando: boolean = false;
  id?: number | null;
  rol?: string;
  correo?: string;

  constructor(
    private msgService: NzMessageService, 
    private router: Router,
    private autenticacionService: AutenticacionService,
    private usuarioService: UsuarioService,
    private tokenService: TokenService
  ) {

    }

  ngOnInit(): void {
    this.getUsuarioInfo();
  }

  getUsuarioInfo(): void {
    this.id = this.autenticacionService.obtenerIdUsuario();
    if (this.id) {
      this.usuarioService.obtenerPorId(this.id).subscribe({
        next: (usuario) => {
          this.correo = usuario.correo;
          const rol_id = usuario.rol_id;
          if (rol_id === 1) {
            this.rol = 'Profesor';
          } else if (rol_id === 2) {
            this.rol = 'Estudiante';
          } else {
            this.rol = 'Admin';
          }
        },
        error: (errores) => {
          console.log(errores.error.errores);
        }
      });
    }
  }

  salir() {
    this.manejarRespuesta(null);
  }

  manejarRespuesta(respuesta: any): void {
    this.cargando = false;
    this.msgService.success('¡Se cerró sesión exitosamente!');
    this.tokenService.revocarToken()
    this.router.navigate(['/']);
  }

  manejarError(errores: any): void {
    this.cargando = false;
    this.msgService.error('Ocurrió un error al cerrar sesión.');
    console.log(errores.error.errores);
  }
}
