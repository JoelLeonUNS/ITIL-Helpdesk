import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarServiciosComponent } from './solicitar-servicios.component';

describe('SolicitarServiciosComponent', () => {
  let component: SolicitarServiciosComponent;
  let fixture: ComponentFixture<SolicitarServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
