import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetails } from './history-details';

describe('HistoryDetails', () => {
  let component: HistoryDetails;
  let fixture: ComponentFixture<HistoryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
