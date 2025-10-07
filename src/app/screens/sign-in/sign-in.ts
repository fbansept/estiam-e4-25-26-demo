import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidationIndicator } from '@app/components/password-validation-indicator/password-validation-indicator';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordValidationIndicator
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  formBuilder = inject(FormBuilder);

  minPasswordLength = 8;
  passwordMinLengthValid = false;
  passwordHasUppercaseValid = false;
  passwordHasLowercaseValid = false;
  passwordHasSpecialValid = false;

  formGroup = this.formBuilder.group({
    email: [
      '',
      [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'), Validators.required],
    ],
    password: ['', [
      Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$')  
    ]],
  });

  onChangePassword() {
    const password = this.formGroup.get('password')?.value || '';

    this.passwordMinLengthValid = password.length >= this.minPasswordLength;
    this.passwordHasUppercaseValid = /[A-Z]/.test(password);
    this.passwordHasLowercaseValid = /[a-z]/.test(password);
    this.passwordHasSpecialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }
}
