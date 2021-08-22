import { Component, Input, OnInit } from '@angular/core';
import { Quote } from './quotes.service';

@Component({
  selector: 'sadf-quote-card',
  styleUrls: ['./quote-card.component.scss'],
  template: `
    <div *ngIf="quote">
      <h6>{{quote.artist.name}}</h6>
      <p>{{quote.quote}}</p>
    </div>
  `
})

export class QuoteCardComponent {
  @Input()
  public quote: Quote | undefined = undefined;
}
