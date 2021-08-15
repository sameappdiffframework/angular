import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CardWallComponent } from './card-wall.component';
import { NavComponent } from './nav.component';
import { NotesService } from './service/notes.service';

@NgModule({
  declarations: [CardWallComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [NotesService],
  bootstrap: [CardWallComponent, NavComponent]
})
export class AppModule {
}
