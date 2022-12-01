import { TestBed } from '@angular/core/testing';

import { LoadModel2Service } from './load-model2.service';

describe('LoadModel2Service', () => {
  let service: LoadModel2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadModel2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
