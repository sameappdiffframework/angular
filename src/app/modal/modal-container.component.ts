import { Component, EventEmitter, Input, Output, Type } from '@angular/core';

// TODO: add animations
@Component({
  selector: 'sadf-modal',
  template: `
    <div role="dialog">
      <button (click)="close()">Close</button>
      <ng-container *ngIf="comp">
        <ng-template [ngComponentOutlet]="comp"></ng-template>
      </ng-container>
    </div>
  `,
  styleUrls: ['modal-container.component.scss']
})
export class ModalContainerComponent {
  @Input()
  public comp!: Type<any>;
  @Output()
  public closeClicked: EventEmitter<void> = new EventEmitter<void>();

  public close(): void {
    this.closeClicked.emit();
  }
}
