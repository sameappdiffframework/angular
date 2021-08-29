import { Component, Input } from '@angular/core';
import { Quote } from './quotes.service';

@Component({
  selector: 'app-quote-wall',
  template: `
    <h1>Rap Quotes</h1>
    <app-quote *ngFor="let quote of quotes" [quote]="quote"></app-quote>
  `
})
export class QuoteWallComponent {
  @Input()
  public quotes: Quote[] | undefined = undefined;
}
