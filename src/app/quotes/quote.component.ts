import { Component, Input } from '@angular/core';
import { Quote } from './quotes.service';

@Component({
  selector: 'app-quote',
  styleUrls: ['./quote.component.scss'],
  template: `
    <figure *ngIf="quote">
      <blockquote>
        <p>{{quote.quote}}</p>
      </blockquote>
      <img [src]="quote.source.image">
      <figcaption>
        <p>{{quote.artist.name}}</p>
        <cite>
          <!-- routerLink doesn't support external links, but using href bypasses route guards.-->
          <a [href]="quote.source.url" target="_blank">
            {{quote.source.name}}
          </a>
        </cite>
      </figcaption>
    </figure>
  `
})
export class QuoteComponent {
  @Input()
  public quote: Quote | undefined = undefined;
}
