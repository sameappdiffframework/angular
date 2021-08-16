import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CreateQuoteButtonComponent } from './create-quote-btn.component';
import { ModalModule } from './modal/modal.module';
import { NavComponent } from './nav.component';
import { QuoteCardComponent } from './quote-card.component';
import { QuoteWallComponent } from './quote-wall.component';
import { QuotesService } from './service/quotes.service';

@NgModule({
  declarations: [QuoteWallComponent, NavComponent, QuoteCardComponent, CreateQuoteButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule, ModalModule],
  providers: [QuotesService],
  bootstrap: [QuoteWallComponent, NavComponent]
})
export class AppModule {
}
