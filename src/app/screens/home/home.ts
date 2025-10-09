import {AsyncPipe, DatePipe, NgOptimizedImage} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {HistoryLine} from '@app/models/history-line';
import {HttpClient} from '@angular/common/http';
import {HistoryLineService} from '@app/services/history-line';
import {ScrapService} from '@app/services/scrap';

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
    AsyncPipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    search: ['', [Validators.required]],
  });
  historyLineService = inject(HistoryLineService);
  scrapService = inject(ScrapService);

  ngOnInit() {
    this.refresh()
  }

  refresh () {
    this.historyLineService
      .list()
      .subscribe();
  }

  onScrap() {
   if(this.formGroup.valid && this.formGroup.value.search) {
     this.scrapService
       .scrap(this.formGroup.value.search)
       .subscribe({
         next: r => notificationService.show("I found X result !", "valid"), //notification en vert
         error: e => notificationService.show("Some issues append :( ", "error") //notification en rouge
         //le system de notification est dans un service, qui utilise le service MatSnackBar
         //la notification dure toujours 5 secondes.
       });
   }
  }
}
