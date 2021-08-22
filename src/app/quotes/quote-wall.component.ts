import { Component, OnInit } from '@angular/core';
import { Quote, QuotesService } from './quotes.service';

@Component({
  selector: 'sadf-quote-wall',
  template: `
    <div class="quotes" *ngIf="quotes">
      <sadf-quote-card *ngFor="let quote of quotes"
                       class="quote"
                       [quote]="quote">
      </sadf-quote-card>
      <sadf-create-quote-btn class="quote" (quoteCreated)="createQuote($event)"></sadf-create-quote-btn>
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
