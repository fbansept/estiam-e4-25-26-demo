import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidationIndicator } from './password-validation-indicator';

describe('PasswordValidationIndicator', () => {
  let component: PasswordValidationIndicator;
  let fixture: ComponentFixture<PasswordValidationIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordValidationIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordValidationIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
