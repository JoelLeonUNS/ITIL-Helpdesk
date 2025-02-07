import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAsignadosComponent } from './servicios-asignados.component';

describe('ServiciosAsignadosComponent', () => {
  let component: ServiciosAsignadosComponent;
  let fixture: ComponentFixture<ServiciosAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosAsignadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
