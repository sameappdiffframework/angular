import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CreateQuoteFormComponent } from './create-quote-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [CreateQuoteFormComponent],
  exports: [CreateQuoteFormComponent]
})
export class CreateQuoteFormModule {
}
