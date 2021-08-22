import { Component, EventEmitter, Output } from '@angular/core';
import { ModalOptions, ModalService } from '../modal/modal.service';
import { Quote } from '../quotes/quotes.service';
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
  public quoteCreated: EventEmitter<Quote> = new EventEmitter<Quote>();

  public constructor(private modalSvc: ModalService) {
  }

  public createQuote(): void {
    const options: ModalOptions<CreateQuoteFormComponent> = { closeEmitterNames: ['formSubmitted', 'formCanceled'] };
    this.modalSvc.open(CreateQuoteFormComponent, options).subscribe((result: Quote) => this.quoteCreated.emit(result));
  }
}
