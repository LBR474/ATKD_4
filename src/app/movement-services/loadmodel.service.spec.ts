import { TestBed } from '@angular/core/testing';

import { LoadModelService } from './loadmodel.service';

describe('DataService', () => {
  let service: LoadModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
