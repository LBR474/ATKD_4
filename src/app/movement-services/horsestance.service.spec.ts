import { TestBed } from '@angular/core/testing';

import { HorsestanceService } from './horsestance.service';

describe('HorsestanceService', () => {
  let service: HorsestanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorsestanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
