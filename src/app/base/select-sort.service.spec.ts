import { TestBed } from '@angular/core/testing';

import { SelectSortService } from './select-sort.service';

describe('SelectSortService', () => {
  let service: SelectSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
