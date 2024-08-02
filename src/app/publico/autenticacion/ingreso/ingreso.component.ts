import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../../core/servicios/rest/autenticacion/autenticacion.service';
import { TokenService } from '../../../core/servicios/token/token.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UsuarioService } from '../../../core/servicios/rest/usuario/usuario.service';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzFlexModule,
    NzLayoutModule,
    NzDividerModule,
  ],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css',
})
export class IngresoComponent implements OnInit {
  ingresoForm: FormGroup<{
    correo: FormControl<string>;
    clave: FormControl<string>;
  }> = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  cargando: boolean = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private autenticacionService: AutenticacionService,
    private usuarioService: UsuarioService,
    private msgService: NzMessageService,
    private tokenServicio: TokenService
  ) {}

  ngOnInit(): void {}

  enviarFormulario(): void {
    this.cargando = true;
    if (this.ingresoForm.valid) {
      this.autenticacionService.ingreso(this.ingresoForm.value).subscribe({
        next: (respuesta) => {
          if (respuesta) {
            this.manejarRespuesta(respuesta);
          } else {
            this.manejarError(respuesta);
          }
        },
        error: (errores) => {
          this.manejarError(errores);
        },
      });
      console.log('submit', this.ingresoForm.value);
    } else {
      this.cargando = false;
      this.msgService.error('¡Complete los campos!');
      Object.values(this.ingresoForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  manejarRespuesta(respuesta: any): void {
    this.cargando = false;
    this.msgService.success('¡Inicio de sesión exitoso!');
    this.tokenServicio.manejarToken('token_simulado');

    const id = this.autenticacionService.obtenerIdUsuario();
    this.usuarioService.obtenerPorId(id!).subscribe({
      next: (usuario) => {
        const rol_id = usuario.rol_id;

        switch (rol_id) {
          case 1:
            this.router.navigate(['/admin']);
            break;
          case 2:
            this.router.navigate(['/servidor']);
            break;
          case 3:
            this.router.navigate(['/solicitante']);
            break;
          default:
            this.router.navigate(['/']);
            break;
        }
      },
    });
  }

  manejarError(errores: any): void {
    this.cargando = false;
    this.msgService.error('¡Nombre de usuario o contraseña incorrecta!');
  }
}
