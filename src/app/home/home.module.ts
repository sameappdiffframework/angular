import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateQuoteFormModule } from '../create-quote-form/create-quote-form.module';
import { QuotesModule } from '../quotes/quotes.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    BrowserModule,
    CreateQuoteFormModule,
    QuotesModule
  ]
})
export class HomeModule {
}
