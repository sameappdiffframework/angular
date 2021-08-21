import { Component, EventEmitter, Output } from '@angular/core';
import { ModalOptions, ModalService } from '../modal/modal.service';
import { Quote, QuotesService } from '../quotes/quotes.service';
import { CreateQuoteFormComponent } from './create-quote-form.component';

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

  public constructor(private quoteSvc: QuotesService, private modalSvc: ModalService) {
  }

  public createQuote(): void {
    const newQuote: Quote = {
      quote: 'Look how they hate me but copy me. ' +
        'Possibly I was the one with components and properties to be the greatest of all time, but you won geography lottery.',
      artist: 'Big K.R.I.T.',
      source: 'Big K.R.I.T.'
    }
    const options: ModalOptions<CreateQuoteFormComponent> = {
      closeEmitterNames: ['formSubmitted', 'formCanceled']
    };
    this.modalSvc.open(CreateQuoteFormComponent, options)
      .subscribe(result => {
        console.log('modal closed', result);
      });
  }
}
