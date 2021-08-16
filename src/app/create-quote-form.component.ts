import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sadf-create-quote-form',
  template: `
  <h1>Add a quote</h1>
  <form>
    <label for="artist">Artist</label>
    <input type="text" id="artist"/>
    <label for="source">Source</label>
    <input type="text" id="source"/>
    <label for="quote">Quote</label>
    <textarea id="quote"></textarea>
  </form>
  `
})
export class CreateQuoteFormComponent {
}
