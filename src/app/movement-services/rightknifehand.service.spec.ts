import { TestBed } from '@angular/core/testing';

import { RightknifehandService } from './rightknifehand.service';

describe('RightknifehandService', () => {
  let service: RightknifehandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightknifehandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
