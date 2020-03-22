import { TestBed } from '@angular/core/testing';

import { YelpAPIService } from './yelp-api.service';

describe('YelpAPIService', () => {
  let service: YelpAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YelpAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
