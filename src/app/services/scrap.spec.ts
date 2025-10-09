import { TestBed } from '@angular/core/testing';

import { Scrap } from './scrap';

describe('Scrap', () => {
  let service: Scrap;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scrap);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
