import { TestBed } from '@angular/core/testing';

import { LastplayService } from './lastplay.service';

describe('LastplayService', () => {
  let service: LastplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
