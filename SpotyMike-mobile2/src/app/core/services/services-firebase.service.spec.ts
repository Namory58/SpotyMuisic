import { TestBed } from '@angular/core/testing';

import { ServiceFirebaseService } from './services-firebase.service';

describe('ServicesFirebaseService', () => {
  let service: ServiceFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
