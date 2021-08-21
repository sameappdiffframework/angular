import { Component, EventEmitter, HostListener, Input, Output, Type } from '@angular/core';

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
  public eventNames: string[] = [];

  public close(): void {
    console.log('names', this.eventNames);
    this.closeClicked.emit();
  }
}
