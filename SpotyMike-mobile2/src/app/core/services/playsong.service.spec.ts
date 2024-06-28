import { TestBed } from '@angular/core/testing';

import { PlaysongService } from './playsong.service';

describe('PlaysongService', () => {
  let service: PlaysongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaysongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
