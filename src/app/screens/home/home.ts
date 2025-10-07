import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { history as fakeHistory } from '@app/fake-data/history';

@Component({
  selector: 'app-home',
  imports: [
    DatePipe,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    search: ['', [Validators.required]],
  });

  history = fakeHistory;
}
