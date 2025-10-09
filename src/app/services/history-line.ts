import {inject, Injectable} from '@angular/core';
import {HistoryLine} from '@app/models/history-line';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryLineService {

  history$: BehaviorSubject<HistoryLine[]> = new BehaviorSubject<HistoryLine[]>([]);

  http = inject(HttpClient);

  list() {
    return this.http
      .get<HistoryLine[]>("http://localhost:8080/api/history/list")
      .pipe(tap(historyLines => {
        this.history$.next(historyLines)
      }))
  }
}
