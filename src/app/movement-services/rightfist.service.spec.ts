import { TestBed } from '@angular/core/testing';

import { RightfistService } from './rightfist.service';

describe('RightfistService', () => {
  let service: RightfistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightfistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
