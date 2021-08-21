import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quote } from '../quotes/quotes.service';

@Component({
  selector: 'sadf-create-quote-form',
  styles: [
    'input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched { border: 1px solid indianred}',
    `
      :host {
        background-color: #f9f9f9;
        max-height: 70%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0.5em;
        z-index: 2;
      }
    `
  ],
  template: `
    <h1>Add a quote</h1>
    <form [formGroup]="quoteForm" (ngSubmit)="submit()">
      <label for="artist">Artist</label>
      <input type="text" formControlName="artist" id="artist"/>
      <div *ngIf="artist.invalid && (artist.dirty || artist.touched)">
        <div *ngIf="artist.errors?.required">Artist is required.</div>
        <div *ngIf="artist.errors?.maxlength">Artist must be less than 100 characters long.</div>
      </div>
      <label for="source">Source</label>
      <input type="text" formControlName="source" id="source"/>
      <div *ngIf="source.invalid && (source.dirty || source.touched)">
        <div *ngIf="source.errors?.required">Source is required.</div>
        <div *ngIf="source.errors?.maxlength">Source must be less than 100 characters long.</div>
      </div>
      <label for="quote">Quote</label>
      <textarea formControlName="quote" id="quote"></textarea>
      <div *ngIf="quote.invalid && (quote.dirty || quote.touched)">
        <div *ngIf="quote.errors?.required">Quote is required.</div>
        <div *ngIf="quote.errors?.maxlength">Quote must be less than 300 characters long.</div>
      </div>
      <button type="submit">Submit</button>
    </form>
  `
})
export class CreateQuoteFormComponent {
  public quoteForm: FormGroup = this.formBuilder.group({
    artist: ['', []],
    source: ['', []],
    quote: ['', []]
  });

  @Output()
  public formSubmitted: EventEmitter<Quote> = new EventEmitter<Quote>();

  public constructor(private formBuilder: FormBuilder, private element: ElementRef) {
  }

  public submit() {
    console.log('submit', this.quoteForm.value);
    if (this.quoteForm.valid) {
      this.formSubmitted.emit(this.quoteForm.value);
      // const event = new Event('closeModal', { bubbles: true });
      // console.log('dispatchEvent', this.element.nativeElement, event);
      // this.element.nativeElement.dispatchEvent(event);
    }
  }

  public get artist(): AbstractControl {
    return this.quoteForm.get('artist') as AbstractControl;
  }

  public get source(): AbstractControl {
    return this.quoteForm.get('source') as AbstractControl;
  }

  public get quote(): AbstractControl {
    return this.quoteForm.get('quote') as AbstractControl;
  }
}
