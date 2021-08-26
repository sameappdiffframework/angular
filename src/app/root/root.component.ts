import { Component, OnInit } from '@angular/core';
import { CreateQuoteFormComponent } from '../create-quote-form/create-quote-form.component';
import { ModalOptions, ModalService } from '../modal/modal.service';
import { Quote, QuotesService } from '../quotes/quotes.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header role="heading" (createQuoteClicked)="createQuote()"></app-header>
    <app-quote-wall role="main" *ngIf="quotes" [quotes]="quotes"></app-quote-wall>
    <app-footer role="contentinfo"></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      background-color: inherit;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      width: 90vw;
      margin: 12vh auto;
      min-height: 75vh;
      padding: 26px 13px;
    }
  `]
})
export class RootComponent implements OnInit {
  public quotes: Quote[] | undefined = undefined;

  public constructor(private quotesSvc: QuotesService, private modalSvc: ModalService) {
  }

  public ngOnInit(): void {
    this.refreshQuotes();
  }

  public refreshQuotes(): void {
    this.quotesSvc.getQuotes()
      .subscribe(quotes => this.quotes = quotes);
  }

  public createQuote(): void {
    const options: ModalOptions<CreateQuoteFormComponent> = { closeEmitterNames: ['formSubmitted', 'formCanceled'] };
    this.modalSvc.open(CreateQuoteFormComponent, options).subscribe((result: Quote) => {
      if (result) {
        this.refreshQuotes();
      }
    });
  }
}
