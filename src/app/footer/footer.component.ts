import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styles: [`
    :host {
      font-size: .7em;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 2px solid var(--tertiary-color);
    }
  `],
  template: `
    <p>
      This site is made by
      <a href="https://github.com/colbywhite" target="_blank">Colby M. White</a>
      and hosted for free by Netlify.
      It is a part of the
      <a href="https://github.com/sameappdiffframework">Same App, Different Framework</a>
      project.
    </p>
    <ul class="no-bullets">
      <li>
        <a href="https://github.com/colbywhite/sadf-angular" target="_blank">Source code</a>
      </li>
    </ul>  `
})
export class FooterComponent {
}
