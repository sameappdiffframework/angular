import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Quote {
  artist: string;
  quote: string;
  source: string;
}

@Injectable({ providedIn: 'root' })
export class QuotesService {
  public constructor(private httpClient: HttpClient) {
  }

  public getQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>('/assets/quotes.json');
  }
}
