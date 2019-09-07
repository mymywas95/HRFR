import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDeviceNewComponent } from './room-device-new.component';

describe('RoomDeviceNewComponent', () => {
  let component: RoomDeviceNewComponent;
  let fixture: ComponentFixture<RoomDeviceNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDeviceNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDeviceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
