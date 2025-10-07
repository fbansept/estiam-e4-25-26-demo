import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-password-validation-indicator',
  imports: [MatIconModule],
  templateUrl: './password-validation-indicator.html',
  styleUrl: './password-validation-indicator.scss',
})
export class PasswordValidationIndicator {
  @Input()
  text = '';

  @Input()
  valid = false;
}
