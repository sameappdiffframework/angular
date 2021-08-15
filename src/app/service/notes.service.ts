import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class NotesService {
  public constructor(private httpClient: HttpClient) {
  }

  public getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>('/assets/notes.json');
  }
}
