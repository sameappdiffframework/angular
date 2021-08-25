import { Component, Input } from '@angular/core';
import { Quote } from './quotes.service';

@Component({
  selector: 'app-quote-wall',
  template: `
    <app-quote *ngFor="let quote of quotes" [quote]="quote"></app-quote>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `]
})
export class QuoteWallComponent {
  @Input()
  public quotes: Quote[] | undefined = undefined;
}
