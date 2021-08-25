import { Component, OnInit } from '@angular/core';
import { Quote, QuotesService } from './quotes.service';

@Component({
  selector: 'app-quote-wall',
  template: `
    <div class="quotes" *ngIf="quotes">
      <app-quote-card *ngFor="let quote of quotes"
                       class="quote"
                       [quote]="quote">
      </app-quote-card>
      <app-create-quote-btn class="quote" (quoteCreated)="createQuote($event)"></app-create-quote-btn>
    </div>
  `,
  styleUrls: ['./quote-wall.component.scss']
})
export class QuoteWallComponent implements OnInit {
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

  public createQuote(quote: Quote): void {
    this.quotesSvc.createQuote(quote).subscribe(this.refreshQuotes.bind(this));
  }
}
