import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPaymentHistoryComponent } from './room-payment-history.component';

describe('RoomPaymentHistoryComponent', () => {
  let component: RoomPaymentHistoryComponent;
  let fixture: ComponentFixture<RoomPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
