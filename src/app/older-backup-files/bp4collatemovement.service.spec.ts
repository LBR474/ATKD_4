import { TestBed } from '@angular/core/testing';

import { Bp4collatemovementService } from '../movement-services/bp4collatemovement.service';

describe('Bp4collatemovementService', () => {
  let service: Bp4collatemovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bp4collatemovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
