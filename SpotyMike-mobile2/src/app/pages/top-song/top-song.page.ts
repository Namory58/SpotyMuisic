import { PlaysongPage } from 'src/app/modale/playsong/playsong.page';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonIcon, ModalController, IonItem } from '@ionic/angular/standalone';
import { chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { Song } from 'src/app/core/interfaces/song';
import { Router } from '@angular/router';
import { LastplayService } from 'src/app/core/services/lastplay.service';

@Component({
  selector: 'app-top-song',
  templateUrl:'./top-song.page.html',
  styleUrls: ['./top-song.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonIcon]
})
export class TopSongPage implements OnInit {
  private firebaseService = inject(ServiceFirebaseService);
  private router = inject(Router);

  constructor(private modalCtrl: ModalController) {
    addIcons({ chevronBackOutline })
  }
  public TopSongs: Song[] = [];
  async ngOnInit() {
    const reponse = await this.firebaseService.getAllSong();
    const songsWithArtists = await Promise.all(reponse.map(async (data: any) => {
      const artiste = await this.firebaseService.getartist(data.artist_id);
      return {
        album_id: data.album_id,
        title: data.title,
        image: data.image,
        song_id: data.song_id,
        top_song_acount: data.top_song_acount,
        artist: artiste,
      } as Song;
    }));
    this.TopSongs = songsWithArtists;
  }
  back() {
    this.router.navigate(['/home/home']);
  }
  async startSong(idSong: string) {
    const song = this.TopSongs.find(item => item.song_id === idSong);
    const modal = await this.modalCtrl.create({
      component: PlaysongPage,
      componentProps: { song }
    });
    modal.present();
  }
}
