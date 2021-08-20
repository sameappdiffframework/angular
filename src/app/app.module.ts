import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav.component';
import { QuoteWallComponent } from './quotes/quote-wall.component';
import { QuotesModule } from './quotes/quotes.module';

@NgModule({
  declarations: [NavComponent],
  imports: [BrowserModule, AppRoutingModule, QuotesModule],
  bootstrap: [QuoteWallComponent, NavComponent]
})
export class AppModule {
}
