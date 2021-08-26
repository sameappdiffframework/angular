import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccentComponent } from './accent/accent.component';
import { AccentModule } from './accent/accent.module';
import { AppRoutingModule } from './app-routing.module';
import { CreateQuoteFormModule } from './create-quote-form/create-quote-form.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ModalModule } from './modal/modal.module';
import { QuotesModule } from './quotes/quotes.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, AppRoutingModule, QuotesModule, AccentModule, HeaderModule, FooterModule, CreateQuoteFormModule, ModalModule],
  bootstrap: [AccentComponent, RootComponent]
})
export class AppModule {
}
