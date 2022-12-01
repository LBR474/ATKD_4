import { TestBed } from '@angular/core/testing';

import { LeftarmdownblockService } from './leftarmwidedownblock.service';

describe('LeftarmdownblockService', () => {
  let service: LeftarmdownblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftarmdownblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
