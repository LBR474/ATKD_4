import { TestBed } from '@angular/core/testing';

import { LeftlegkickService } from './leftlegkick.service';

describe('LeftlegkickService', () => {
  let service: LeftlegkickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftlegkickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
