import { Injectable } from '@angular/core';
import { Song } from 'src/app/core/interfaces/song';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteSongsSubject = new BehaviorSubject<Song[]>([]);

  getFavoriteSongsObservable() { // retourne le mes favorites à jour
    return this.favoriteSongsSubject.asObservable();
  }

  getFavoriteSongs(): Song[] {
    return this.favoriteSongsSubject.getValue(); // retroune l'état actuel de mon  favoriteSongsSubject
  }

  addFavorite(song: Song) {
    const favorites = this.getFavoriteSongs(); // récupérationde la liste actuelle des chansons favorites.
    this.favoriteSongsSubject.next([...favorites, song]); //ajouter du song à ma liste des favorites
    console.log(this.favoriteSongsSubject);
  }
  removeFavorite(song: Song) {
    const favorites = this.getFavoriteSongs().filter(s => s !== song);
    this.favoriteSongsSubject.next(favorites);
  }
  isFavorite(song: Song): boolean {
    return this.getFavoriteSongs().some(s => s === song);
  }
}
