import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from './modal/modal.module';
import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';

@NgModule({
  imports: [
    BrowserModule,
    RootModule,
    ModalModule
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
