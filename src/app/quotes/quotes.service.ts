import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Quote {
  quote: string;
  artist: {
    name: string;
    url: string;
  };
  source: {
    name: string;
    url: string;
    image: string;
  };
}

@Injectable()
export class QuotesService {
  private quotes = new Subject<Quote[]>();
  private lastRemoteQuotes: Quote[] = [];
  private inMemoryQuotes: Quote[] = [];

  public constructor(private httpClient: HttpClient) {
  }

  public getQuotes(): Observable<Quote[]> {
    this.httpClient.get<Quote[]>('/assets/quotes.json')
      .pipe(
        tap(remoteQuotes => this.lastRemoteQuotes = remoteQuotes)
      )
      .subscribe(this.updateQuotes.bind(this));
    return this.quotes.asObservable();
  }

  public createQuote(quote: Quote): Observable<Quote> {
    this.inMemoryQuotes.push(quote);
    this.updateQuotes();
    return of(quote);
  }

  private updateQuotes(): void {
    this.quotes.next([...this.inMemoryQuotes, ...this.lastRemoteQuotes])
  }
}
