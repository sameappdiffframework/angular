import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccentComponent } from './accent/accent.component';
import { AccentModule } from './accent/accent.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { QuotesModule } from './quotes/quotes.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, AppRoutingModule, QuotesModule, AccentModule, HeaderModule],
  bootstrap: [AccentComponent, RootComponent]
})
export class AppModule {
}
