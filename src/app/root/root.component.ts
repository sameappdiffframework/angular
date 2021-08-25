import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>header</header>
    <main>main</main>
    <footer>footer</footer>
  `,
  styles: [`
    :host {
      background-color: inherit;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      width: 90vw;
      margin: 12vh auto;
      min-height: 75vh;
      padding: 26px 13px;
    }
  `]
})
export class RootComponent {
}
