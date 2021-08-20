import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Quote {
  artist: string;
  quote: string;
  source: string;
}

@Injectable()
export class QuotesService {
  private inMemoryQuotes: Quote[] = [];

  public constructor(private httpClient: HttpClient) {
  }

  public getQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>('/assets/quotes.json')
      .pipe(
        map(remoteQuotes => remoteQuotes.concat(this.inMemoryQuotes))
      );
  }

  public createQuote(quote: Quote): Observable<Quote> {
    this.inMemoryQuotes.push(quote);
    return of(quote);
  }
}
