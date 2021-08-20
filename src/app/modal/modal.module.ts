import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalContainerComponent } from './modal-container.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [ModalContainerComponent],
  imports: [BrowserModule],
  providers: [ModalService]
})
export class ModalModule {
}
