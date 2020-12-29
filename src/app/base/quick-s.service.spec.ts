import { TestBed } from '@angular/core/testing';

import { QuickSService } from './quick-s.service';

describe('QuickSService', () => {
  let service: QuickSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
