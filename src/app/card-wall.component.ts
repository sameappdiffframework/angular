import { Component, OnInit } from '@angular/core';
import { Note, NotesService } from './service/notes.service';

@Component({
  selector: 'sadf-card-wall',
  template: `
    <div class="notes" *ngIf="notes">
      <div class="note" *ngFor="let note of notes">{{note.title}}</div>
      <div class="note hidden" *ngFor="let note of [].constructor(getNumberOfEmptyBoxes())"></div>
    </div>
  `,
  styleUrls: ['./card-wall.component.scss']
})
export class CardWallComponent implements OnInit {
  public notes: Note[] | undefined = undefined;

  public constructor(private notesSvc: NotesService) {
  }

  public ngOnInit(): void {
    this.notesSvc.getNotes()
      .subscribe(notes => this.notes = notes);

  }

  public getNumberOfEmptyBoxes(): number {
    if (!this.notes) {
      return 0;
    }
    const notesPerRow = 3;
    const leftoverNotes = this.notes.length % notesPerRow;
    return leftoverNotes === 0 ? leftoverNotes : notesPerRow - leftoverNotes;
  }
}
