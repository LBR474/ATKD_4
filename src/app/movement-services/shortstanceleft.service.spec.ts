import { TestBed } from '@angular/core/testing';

import { ShortstanceleftService } from './shortstanceleft.service';

describe('ShortstanceleftService', () => {
  let service: ShortstanceleftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortstanceleftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
