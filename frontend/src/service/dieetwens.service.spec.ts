import { TestBed } from '@angular/core/testing';

import { DieetwensService } from './dieetwens.service';

describe('DieetwensService', () => {
  let service: DieetwensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DieetwensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
