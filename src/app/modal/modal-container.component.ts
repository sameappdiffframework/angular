import { Component, EventEmitter, Input, Output } from '@angular/core';

// TODO: add animations
@Component({
  selector: 'app-modal',
  styles: [`
    :host > button {
      float: right;
    }
  `],
  template: `
    <button *ngIf="showCloseButton" (click)="close()">Close</button>
  `
})
export class ModalContainerComponent {
  @Input()
  public showCloseButton: boolean = false;
  @Output()
  public closeClicked: EventEmitter<void> = new EventEmitter<void>();

  public close(): void {
    this.closeClicked.emit();
  }
}
