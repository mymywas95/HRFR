import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrackingComponent } from './home-tracking.component';

describe('HomeTrackingComponent', () => {
  let component: HomeTrackingComponent;
  let fixture: ComponentFixture<HomeTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
