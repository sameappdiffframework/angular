import { Component } from '@angular/core';

@Component({
  selector: 'sadf-overlay',
  template: ``,
  styles: [`
    :host {
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  `]
})
export class OverlayComponent {
}
