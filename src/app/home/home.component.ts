import { Component, OnInit } from '@angular/core';
import { Quote, QuotesService } from '../quotes/quotes.service';

@Component({
  selector: 'app-home',
  template: `
    <app-quote-wall role="main" *ngIf="quotes" [quotes]="quotes"></app-quote-wall>
  `
})
export class HomeComponent implements OnInit {
  public quotes: Quote[] | undefined = undefined;

  public constructor(private quotesSvc: QuotesService) {
  }

  public ngOnInit(): void {
    this.refreshQuotes();
  }

  public refreshQuotes(): void {
    this.quotesSvc.getQuotes()
      .subscribe(quotes => this.quotes = quotes);
  }
}
