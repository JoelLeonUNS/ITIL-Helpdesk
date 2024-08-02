import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicoTarjetaComponent } from './mosaico-tarjeta.component';

describe('MosaicoTarjetaComponent', () => {
  let component: MosaicoTarjetaComponent;
  let fixture: ComponentFixture<MosaicoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicoTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MosaicoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
