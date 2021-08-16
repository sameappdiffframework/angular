import { NgModule } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {
}
