import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogCustomComponent } from './confirm-dialog-custom.component';

describe('ConfirmDialogCustomComponent', () => {
  let component: ConfirmDialogCustomComponent;
  let fixture: ComponentFixture<ConfirmDialogCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
