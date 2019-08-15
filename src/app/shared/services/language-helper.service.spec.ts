import { TestBed } from '@angular/core/testing';

import { LanguageHelperService } from './language-helper.service';

describe('LanguageHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageHelperService = TestBed.get(LanguageHelperService);
    expect(service).toBeTruthy();
  });
});
