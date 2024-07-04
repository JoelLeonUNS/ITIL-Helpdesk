import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaNotificacionesComponent } from './bandeja-notificaciones.component';

describe('BandejaNotificacionesComponent', () => {
  let component: BandejaNotificacionesComponent;
  let fixture: ComponentFixture<BandejaNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandejaNotificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandejaNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
