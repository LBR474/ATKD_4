import { TestBed } from '@angular/core/testing';

import { ReturnToStartService } from './return-to-start.service';

describe('ReturnToStartService', () => {
  let service: ReturnToStartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnToStartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
