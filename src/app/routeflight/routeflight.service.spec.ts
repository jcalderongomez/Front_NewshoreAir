import { TestBed } from '@angular/core/testing';

import { RouteflightService } from './routeflight.service';

describe('RouteflightService', () => {
  let service: RouteflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
