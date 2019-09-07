import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDeviceComponent } from './room-device.component';

describe('RoomDeviceComponent', () => {
  let component: RoomDeviceComponent;
  let fixture: ComponentFixture<RoomDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
