import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoTicketComponent } from './formato-ticket.component';

describe('FormatoTicketComponent ', () => {
  let component: FormatoTicketComponent ;
  let fixture: ComponentFixture<FormatoTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatoTicketComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormatoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
