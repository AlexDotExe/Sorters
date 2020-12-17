import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapSortComponent } from './heap-sort.component';

describe('HeapSortComponent', () => {
  let component: HeapSortComponent;
  let fixture: ComponentFixture<HeapSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeapSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeapSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
