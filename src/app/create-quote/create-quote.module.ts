import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from '../modal/modal.module';
import { CreateQuoteButtonComponent } from './create-quote-btn.component';
import { CreateQuoteFormComponent } from './create-quote-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, ModalModule],
  declarations: [CreateQuoteFormComponent, CreateQuoteButtonComponent],
  exports: [CreateQuoteFormComponent, CreateQuoteButtonComponent]
})
export class CreateQuoteModule {
}
