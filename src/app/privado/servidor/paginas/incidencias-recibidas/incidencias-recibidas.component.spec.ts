import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasRecibidasComponent } from './incidencias-recibidas.component';

describe('IncidenciasRecibidasComponent', () => {
  let component: IncidenciasRecibidasComponent;
  let fixture: ComponentFixture<IncidenciasRecibidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciasRecibidasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciasRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
