import { TestBed } from '@angular/core/testing';

import { HistoryLine } from './history-line';

describe('HistoryLine', () => {
  let service: HistoryLine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryLine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
