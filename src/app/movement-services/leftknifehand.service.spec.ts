import { TestBed } from '@angular/core/testing';

import { LeftknifehandService } from './leftknifehand.service';

describe('LeftknifehandService', () => {
  let service: LeftknifehandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftknifehandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
