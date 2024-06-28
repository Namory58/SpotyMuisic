import { Component, OnInit, inject } from '@angular/core';
import { IonGrid, IonCol, IonRow, ModalController } from '@ionic/angular/standalone';
import { Song } from 'src/app/core/interfaces/song';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { PlaysongPage } from 'src/app/modale/playsong/playsong.page';
@Component({
  selector: 'app-crid',
  templateUrl: './crid.component.html',
  styleUrls: ['./crid.component.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonCol,
    IonRow

  ]
})
export class CridComponent implements OnInit {

  private firebaseService = inject(ServiceFirebaseService);
  public AllListeSong: Song[] = []

  constructor(private modalCtrl: ModalController) { }

  async ngOnInit() {
    const reponse = await this.firebaseService.getSongs();
    const songsWithArtists = await Promise.all(reponse.map(async (data: any) => {
      const artiste = await this.firebaseService.getartist(data.artist_id);
      return {
        album_id: data.album_id,
        title: data.title,
        image: data.image,
        top_song_acount: data.top_song_acount,
        song_id: data.song_id,
        artist: artiste,
      } as Song;
    }));
    this.AllListeSong = songsWithArtists;
  }
  async startSong(idSong: string) {
    const song = this.AllListeSong.find(item => item.song_id === idSong);
    const modal = await this.modalCtrl.create({
      component: PlaysongPage,
      componentProps: { song }
    });
    modal.present();
  }
}


