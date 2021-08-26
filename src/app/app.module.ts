import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccentComponent } from './accent/accent.component';
import { AccentModule } from './accent/accent.module';
import { ModalModule } from './modal/modal.module';
import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';

@NgModule({
  imports: [
    BrowserModule,
    RootModule,
    AccentModule,
    ModalModule
  ],
  bootstrap: [AccentComponent, RootComponent]
})
export class AppModule {
}
