import { TestBed } from '@angular/core/testing';

import { RsvpService } from './rsvp.service';

describe('DieetwensService', () => {
  let service: RsvpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsvpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
