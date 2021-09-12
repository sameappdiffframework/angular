import { Component } from '@angular/core';
import { CreateQuoteFormComponent } from '../create-quote-form/create-quote-form.component';
import { ModalOptions, ModalService } from '../modal/modal.service';
import { Quote, QuotesService } from '../quotes/quotes.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header role="heading" (createQuoteClicked)="createQuote()"></app-header>
    <router-outlet></router-outlet>
    <app-footer role="contentinfo"></app-footer>
  `
})
export class RootComponent {
  public quotes: Quote[] | undefined = undefined;

  public constructor(private quotesSvc: QuotesService, private modalSvc: ModalService) {
  }

  public createQuote(): void {
    const options: ModalOptions<CreateQuoteFormComponent> = { closeEmitterNames: ['formSubmitted', 'formCanceled'] };
    this.modalSvc.open(CreateQuoteFormComponent, options).subscribe((result: Quote) => {
      if (result) {
        this.quotesSvc.createQuote(result);
      }
    });
  }
}
