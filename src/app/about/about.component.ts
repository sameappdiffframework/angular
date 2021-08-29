import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  styles: [
    `:host {
      padding-left: 26px;
      display: block;
    }`
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {
}
