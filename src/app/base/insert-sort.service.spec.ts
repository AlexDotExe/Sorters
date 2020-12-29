import { TestBed } from '@angular/core/testing';

import { InsertSortService } from './insert-sort.service';

describe('InsertSortService', () => {
  let service: InsertSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
