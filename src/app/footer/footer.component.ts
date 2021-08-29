import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styles: [`
    :host {
      font-size: .7em;
      display: flex;
      justify-content: space-between;
      margin: 1em 0 0 0;
      border-top: 1px solid var(--primary-accent);
      padding: 1em 0 0 0;
      gap: 1em;
    }

    :host p {
      flex-basis: 50%;
      margin: 0;
    }
  `],
  template: `
    <ul class="no-bullets">
      <li>
        <a href="https://github.com/sameappdiffframework" target="_blank">Same App, Different Framework</a>
      </li>
      <li>
        <a href="https://github.com/sameappdiffframework/rap-quotes-angular" target="_blank">Source code</a>
      </li>
    </ul>
    <p>
      This site is made by
      <a href="https://github.com/colbywhite" target="_blank">Colby M. White</a>
      and hosted for free by Netlify.
      It is a part of the
      <a href="https://github.com/sameappdiffframework" target="_blank">Same App, Different Framework</a>
      project.
    </p>
  `
})
export class FooterComponent {
}
