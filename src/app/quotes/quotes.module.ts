import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateQuoteModule } from '../create-quote/create-quote.module';
import { QuoteCardComponent } from './quote-card.component';
import { QuoteWallComponent } from './quote-wall.component';
import { QuotesService } from './quotes.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, CreateQuoteModule],
  providers: [QuotesService],
  declarations: [QuoteWallComponent, QuoteCardComponent],
  exports: [QuoteWallComponent, QuoteCardComponent]
})
export class QuotesModule {
}
