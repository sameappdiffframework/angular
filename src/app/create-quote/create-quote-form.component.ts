import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sadf-create-quote-form',
  styles: ['input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched { border: 1px solid indianred}'],
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
    artist: ['', [Validators.required, Validators.maxLength(100)]],
    source: ['', [Validators.required, Validators.maxLength(100)]],
    quote: ['', [Validators.required, Validators.maxLength(300)]]
  });

  public constructor(private formBuilder: FormBuilder) {
  }

  public submit() {
    console.log('submit', this.quoteForm.value);
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
