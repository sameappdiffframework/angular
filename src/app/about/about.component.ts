import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  styles: [
    `:host {
      padding-left: 26px;
      display: block;
    }`
  ],
  preserveWhitespaces: true,
  templateUrl: './about.component.html'
})
export class AboutComponent {
}
