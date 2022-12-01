import { TestBed } from '@angular/core/testing';

import { LeftfistService } from './leftfist.service';

describe('LeftfistService', () => {
  let service: LeftfistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftfistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
