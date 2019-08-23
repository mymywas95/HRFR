import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarNewComponent } from './calendar-new.component';

describe('CalendarNewComponent', () => {
  let component: CalendarNewComponent;
  let fixture: ComponentFixture<CalendarNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
