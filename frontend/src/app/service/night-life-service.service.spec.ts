import { TestBed } from '@angular/core/testing';

import { NightLifeServiceService } from './night-life-service.service';

describe('NightLifeServiceService', () => {
  let service: NightLifeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NightLifeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
