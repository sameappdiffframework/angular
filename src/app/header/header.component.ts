import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: [`
    :host {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid var(--tertiary-color);
      margin-bottom: 1.5rem;
      padding-top: .75rem;
      padding-bottom: .75rem;
    }

    nav > ul {
      margin-top: unset;
      margin-bottom: unset;
      padding: 5px;
      display: flex;
      gap: 10px;
      align-items: center;
    }

    nav > ul > li {
      margin-bottom: unset;
    }
  `],
  template: `
    <h1>Rap Quotes</h1>

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
