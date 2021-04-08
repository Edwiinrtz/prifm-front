import { TestBed } from '@angular/core/testing';

import { ProveerdorService } from './proveerdor.service';

describe('ProveerdorService', () => {
  let service: ProveerdorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveerdorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
