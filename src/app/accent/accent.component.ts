import { Component } from '@angular/core';

@Component({
  selector: 'app-accent',
  template: '',
  styles: [`
    :host {
      background-color: var(--tertiary-color);
      width: 100%;
      height: 87%;
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      clip-path: polygon(0 0, 24% 0, 71% 70%, 5% 70%, 0 63%);
    }
  `]
})
export class AccentComponent {
}
