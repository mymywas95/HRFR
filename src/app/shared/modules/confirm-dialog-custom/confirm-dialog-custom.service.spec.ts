import { TestBed } from '@angular/core/testing';

import { ConfirmDialogCustomService } from './confirm-dialog-custom.service';

describe('ConfirmDialogCustomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmDialogCustomService = TestBed.get(ConfirmDialogCustomService);
    expect(service).toBeTruthy();
  });
});
