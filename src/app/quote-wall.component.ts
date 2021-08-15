import { Component, OnInit } from '@angular/core';
import { Quote, QuotesService } from './service/quotes.service';

@Component({
  selector: 'sadf-quote-wall',
  template: `
    <div class="quotes" *ngIf="quotes">
      <sadf-quote-card *ngFor="let quote of quotes"
                       class="quote"
                       [quote]="quote">
      </sadf-quote-card>
      <sadf-create-quote-btn class="quote" (quoteCreated)="refreshQuotes()"></sadf-create-quote-btn>
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

  public getNumberOfEmptyCards(): number {
    if (!this.quotes) {
      return 0;
    }
    const quotesPerRow = 3;
    const leftoverquotes = this.quotes.length % quotesPerRow;
    return leftoverquotes === 0 ? leftoverquotes : quotesPerRow - leftoverquotes;
  }

  public refreshQuotes(): void {
    this.quotesSvc.getQuotes()
      .subscribe(quotes => this.quotes = quotes);
  }
}
