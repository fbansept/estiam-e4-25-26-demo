import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HistoryLineService} from '@app/services/history-line';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrapService {

  http = inject(HttpClient);
  historyLineService = inject(HistoryLineService);

  scrap(search: string) {
    return this.http
      .post("http://localhost:8080/api/scrap", {search : search})
      .pipe(tap(r => {
        this.historyLineService.list().subscribe()
      }))
  }


}
