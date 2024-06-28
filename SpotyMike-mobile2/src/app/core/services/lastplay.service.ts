import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastplayService {

  private lastplaySongs: Song[] = [];
  private lastplaySongsSubject = new BehaviorSubject<Song[]>([]);

  constructor() {
    const storedSongs = localStorage.getItem('lastplaySongs');
    if (storedSongs) {
      this.lastplaySongs = JSON.parse(storedSongs);
      this.lastplaySongsSubject.next(this.lastplaySongs);
    }
  }
  private updateLastplaySongs() {
    // Mettre à jour le BehaviorSubject et enregistrer dans le localStorage
    this.lastplaySongsSubject.next([...this.lastplaySongs]);
    localStorage.setItem('lastplaySongs', JSON.stringify(this.lastplaySongs));
  }

  mylastplaylisteadd(song: Song) {
    this.lastplaySongs.push(song);
    this.updateLastplaySongs();
  }
  getmylastplayListe() {
    return this.lastplaySongsSubject.asObservable();
  }
}
