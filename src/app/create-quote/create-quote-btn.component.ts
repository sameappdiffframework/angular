import { Component, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { CreateQuoteFormComponent } from './create-quote-form.component';
import { ModalService } from '../modal/modal.service';
import { Quote, QuotesService } from '../quotes/quotes.service';

@Component({
  selector: 'sadf-create-quote-btn',
  styleUrls: ['create-quote-btn.component.scss'],
  template: `
    <button (click)="createQuote()">Create quote</button>
  `
})
export class CreateQuoteButtonComponent {
  @Output()
  public quoteCreated: EventEmitter<void> = new EventEmitter<void>();

  public constructor(
    private quoteSvc: QuotesService,
    private modalSvc: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  public createQuote(): void {
    const newQuote: Quote = {
      quote: 'Look how they hate me but copy me. ' +
        'Possibly I was the one with components and properties to be the greatest of all time, but you won geography lottery.',
      artist: 'Big K.R.I.T.',
      source: 'Big K.R.I.T.'
    }
    this.modalSvc.open(this.viewContainerRef, CreateQuoteFormComponent, ['formSubmitted', 'quoteForm']);
  }
}
