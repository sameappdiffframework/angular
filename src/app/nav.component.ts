import { Component } from '@angular/core';

@Component({
  selector: 'sadf-nav',
  styleUrls: ['./nav.component.scss'],
  template: `
    <h1>SADF - Angular</h1>
    <nav>
      <ul>
        <li>
          <a routerLink="/">All quotes</a>
        </li>
        <li>
          <a routerLink="/">About</a>
        </li>
      </ul>

      <div class="search">
        <input type="text" placeholder="Search quotes"/>
        <img src="/assets/search.png"/>
      </div>
    </nav>
  `
})
export class NavComponent {
}
