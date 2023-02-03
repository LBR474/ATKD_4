

 import { TestBed } from '@angular/core/testing';

import { TimerVariablesService } from '../movement-services/timer-variables.service';

describe('TimerVariablesService', () => {
  let service: TimerVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
