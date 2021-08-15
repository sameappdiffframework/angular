import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CardWallComponent } from './card-wall.component';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [
    CardWallComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [CardWallComponent, NavComponent]
})
export class AppModule {
}
