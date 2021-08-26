import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quote } from '../quotes/quotes.service';

@Component({
  selector: 'app-create-quote-form',
  styles: [`
    :host {
      background-color: var(--primary-color);
      min-height: 30%;
      max-height: 70%;
      width: 50%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.5em;
      z-index: 2;
    }
  `],
  template: `
    <h1>Add a quote</h1>
    <hr/>
    <form [formGroup]="quoteForm" (ngSubmit)="submit()">
      <label for="artist">Artist</label>
      <input type="text" formControlName="artist" id="artist"/>
      <div *ngIf="artist.invalid && (artist.dirty || artist.touched)">
        <div *ngIf="artist.errors?.required">Artist is required.</div>
        <div *ngIf="artist.errors?.maxlength">Artist must be less than 25 characters long.</div>
      </div>
      <label for="source">Source</label>
      <input type="text" formControlName="source" id="source"/>
      <div *ngIf="source.invalid && (source.dirty || source.touched)">
        <div *ngIf="source.errors?.required">Source is required.</div>
        <div *ngIf="source.errors?.maxlength">Source must be less than 25 characters long.</div>
      </div>
      <label for="quote">Quote</label>
      <textarea formControlName="quote" id="quote"></textarea>
      <div *ngIf="quote.invalid && (quote.dirty || quote.touched)">
        <div *ngIf="quote.errors?.required">Quote is required.</div>
        <div *ngIf="quote.errors?.maxlength">Quote must be less than 100 characters long.</div>
      </div>
      <button type="submit">Submit</button>
      <button (click)="cancel()">Cancel</button>
    </form>
  `
})
export class CreateQuoteFormComponent {
  public quoteForm: FormGroup = this.formBuilder.group({
    artist: ['', [Validators.required, Validators.maxLength(25)]],
    source: ['', [Validators.required, Validators.maxLength(25)]],
    quote: ['', [Validators.required, Validators.maxLength(100)]]
  });

  @Output()
  public formSubmitted: EventEmitter<Quote> = new EventEmitter<Quote>();
  @Output()
  public formCanceled: EventEmitter<void> = new EventEmitter<void>();

  public constructor(private formBuilder: FormBuilder) {
  }

  public submit() {
    if (this.quoteForm.valid) {
      const formInput = this.quoteForm.value;
      // TODO: get urls/images from spotify
      const quote: Quote = {
        quote: formInput.quote,
        artist: {
          name: formInput.artist,
          url: ''
        },
        source: {
          name: formInput.source,
          url: '',
          image: ''
        }
      }
      this.formSubmitted.emit(quote);
    }
  }

  public cancel() {
    this.formCanceled.emit();
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
