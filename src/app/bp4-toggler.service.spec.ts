import { TestBed } from '@angular/core/testing';

import { Bp4TogglerService } from './movement-services/bp4-toggler.service';

describe('BP4TogglerService', () => {
  let service: Bp4TogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bp4TogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
