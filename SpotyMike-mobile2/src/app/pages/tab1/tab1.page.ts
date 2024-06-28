import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, ModalController, IonIcon } from '@ionic/angular/standalone';
import { CridComponent } from 'src/app/shared/components/crid/crid.component';
import { LastplayComponent } from 'src/app/shared/components/lastplay/lastplay.component';
import { TopPlaylistsComponent } from 'src/app/shared/components/top-playlists/top-playlists.component';
import { MusicGenrePage } from "../../shared/components/music-genre/music-genre.page";
import { addIcons } from 'ionicons';
import { arrowForwardOutline, chevronBackOutline, heartOutline, pauseOutline, personCircleOutline, playOutline, playSkipBackOutline, playSkipForwardOutline, repeatOutline, searchOutline, shareSocialOutline, shuffleOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { TopArtistsPage } from "../../shared/components/top-artists/top-artists.page";
import { TopAlbumPage } from "../../shared/components/top-album/top-album.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, CridComponent, LastplayComponent, TopPlaylistsComponent, MusicGenrePage, TopArtistsPage, TopAlbumPage]
})
export class Tab1Page {
  constructor(private modalCtrl: ModalController) {
    addIcons({ searchOutline, personCircleOutline, arrowForwardOutline, shareSocialOutline, heartOutline, playSkipBackOutline, playSkipForwardOutline, playOutline, repeatOutline, shuffleOutline, chevronBackOutline, pauseOutline })
  }
  private router = inject(Router);
  showAllTopSong() {
    this.router.navigate(['/top-song']);
  }
  search() {
    console.log("run");
  }
  showAllTopAlbum() {
    this.router.navigate(['/topAllalbum']);
  }
  showAllTopArtist() {
    this.router.navigate(['/topAllartist']);
  }
}
