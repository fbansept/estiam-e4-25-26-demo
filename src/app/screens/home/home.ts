import {DatePipe, NgOptimizedImage} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {HistoryLine} from '@app/models/history-line';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [
    DatePipe,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    search: ['', [Validators.required]],
  });
  http = inject(HttpClient);
  history: HistoryLine[] = []

  ngOnInit() {
    this.refresh()
  }

  refresh () {
    this.http
      .get<HistoryLine[]>("http://localhost:8080/api/history/list")
      .subscribe(historyLines => this.history = historyLines);
  }

  onScrap() {
   if(this.formGroup.valid) {
     this.http
       .post("http://localhost:8080/api/scrap", this.formGroup.value)
       .subscribe(historyLine => this.refresh());
   }
  }


}
