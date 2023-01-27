import { TestBed } from '@angular/core/testing';

import { RightlegkickService } from '../movement-services/rightlegkick.service';

describe('RightlegkickService', () => {
  let service: RightlegkickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightlegkickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
