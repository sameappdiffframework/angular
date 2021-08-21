import { Component, EventEmitter, Input, Output } from '@angular/core';

// TODO: add animations
@Component({
  selector: 'sadf-modal',
  styles: [`
    :host {
      background-color: #f9f9f9;
      max-height: 70%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.5em;
      z-index: 2;
    }  `, `
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
