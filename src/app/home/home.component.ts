import { Component, OnInit } from '@angular/core';
import { CreateQuoteFormComponent } from '../create-quote-form/create-quote-form.component';
import { ModalOptions, ModalService } from '../modal/modal.service';
import { Quote, QuotesService } from '../quotes/quotes.service';

@Component({
  selector: 'app-home',
  template: `
    <app-quote-wall role="main" *ngIf="quotes" [quotes]="quotes"></app-quote-wall>
  `
})
export class HomeComponent implements OnInit {
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
