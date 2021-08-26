import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { QuoteWallComponent } from './quote-wall.component';
import { QuoteComponent } from './quote.component';
import { QuotesService } from './quotes.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, RouterModule],
  providers: [QuotesService],
  declarations: [QuoteWallComponent, QuoteComponent],
  exports: [QuoteWallComponent]
})
export class QuotesModule {
}
