import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-details',
  imports: [],
  templateUrl: './history-details.html',
  styleUrl: './history-details.scss',
})
export class HistoryDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  idHistory: number | null = null;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.idHistory = +params['id'];
    });
  }
}
