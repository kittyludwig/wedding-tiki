import { TestBed } from '@angular/core/testing';

import { GastService } from './gast.service';

describe('GastServiceService', () => {
  let service: GastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
