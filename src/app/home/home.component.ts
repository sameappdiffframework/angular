import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Quote, QuotesService } from '../quotes/quotes.service';

@Component({
  selector: 'app-home',
  styles: [`
    app-quote-wall {
      padding-left: 26px;
      display: block;
    }
  `],
  template: `
    <app-quote-wall role="main" *ngIf="quotes" [quotes]="quotes"></app-quote-wall>
  `
})
export class HomeComponent implements OnInit {
  public quotes: Quote[] | undefined = undefined;

  public constructor(private quotesSvc: QuotesService) {
  }

  public ngOnInit(): void {
    this.quotesSvc.getQuotes()
      .pipe(tap(q => console.log('HomeComp', q)))
      .subscribe(quotes => this.quotes = quotes);
  }
}
