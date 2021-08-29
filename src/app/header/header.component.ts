import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [`
    :host {
      display: block;
      height: 0;
      border-left: 26px solid transparent;
      border-right: 26px solid transparent;
      border-top: 40px solid var(--primary-accent);
    }

    :host a {
      color: var(--bg-color);
    }

    :host a:hover {
      color: var(--secondary-accent);
      border-bottom: 2px solid var(--secondary-accent);
    }

    nav > ul {
      display: flex;
      justify-content: space-around;
    }

    nav > ul > li {
      text-transform: uppercase;
      margin-top: -40px;
    }
  `],
  template: `
    <nav>
      <ul class="no-bullets">
        <li>
          <a (click)="onCreateQuoteClicked()">Create quote</a>
        </li>
        <li>
          <a routerLink="/">All quotes</a>
        </li>
        <li>
          <a routerLink="/about">About</a>
        </li>
      </ul>
    </nav>
  `
})
export class HeaderComponent {
  @Output()
  public createQuoteClicked: EventEmitter<void> = new EventEmitter<void>();

  public onCreateQuoteClicked(): void {
    this.createQuoteClicked.emit();
  }
}
