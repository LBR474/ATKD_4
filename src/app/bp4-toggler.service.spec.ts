import { TestBed } from '@angular/core/testing';

import { BP4TogglerService } from './movement-services/bp4-toggler.service';

describe('BP4TogglerService', () => {
  let service: BP4TogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BP4TogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
