import { TestBed } from '@angular/core/testing';

import { CityClickService } from './city-click.service';

describe('CityClickService', () => {
  let service: CityClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
