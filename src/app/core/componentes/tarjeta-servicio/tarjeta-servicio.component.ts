import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-tarjeta-servicio',
  standalone: true,
  imports: [
    NzTagModule,
    NzIconModule,
    NzCardModule, 
    NzRateModule, 
    FormsModule
  ],
  templateUrl: './tarjeta-servicio.component.html',
  styleUrl: './tarjeta-servicio.component.css'
})
export class TarjetaServicioComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() tiempoDemora: number = 0;
  @Input() calificacion: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = this.el.nativeElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12; // Máximo 10 grados
    const rotateX = ((centerY - y) / centerY) * 12; // Máximo 10 grados

    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const card = this.el.nativeElement;
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--rotate-x', '0deg');
  }
}
