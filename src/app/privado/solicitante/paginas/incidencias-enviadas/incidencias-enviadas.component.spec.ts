import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasEnviadasComponent } from './incidencias-enviadas.component';

describe('IncidenciasEnviadasComponent', () => {
  let component: IncidenciasEnviadasComponent;
  let fixture: ComponentFixture<IncidenciasEnviadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciasEnviadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncidenciasEnviadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
