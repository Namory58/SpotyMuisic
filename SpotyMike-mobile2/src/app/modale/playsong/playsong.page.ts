import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, ModalController, IonModal, IonButton, IonRange, RangeChangeEventDetail } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PlaysongService } from 'src/app/core/services/playsong.service';
import { addIcons } from 'ionicons';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { shareSocialOutline, heartOutline, heart, playSkipBackOutline, playSkipForwardOutline, playOutline, repeatOutline, shuffleOutline, chevronBackOutline, pauseOutline, thumbsUpSharp } from 'ionicons/icons';
import { LastplayService } from 'src/app/core/services/lastplay.service';
import { IonRangeCustomEvent } from '@ionic/core';
@Component({
  selector: 'app-playsong',
  templateUrl: './playsong.page.html',
  styleUrls: ['./playsong.page.scss'],
  standalone: true,
  imports: [IonRange, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonModal]
})
export class PlaysongPage implements OnInit {
currentTitre: any;
  onRangeChange($event: IonRangeCustomEvent<RangeChangeEventDetail>) {
    throw new Error('Method not implemented.');
  }
  private favoriteService = inject(FavoriteService);
  private lastplayService = inject(LastplayService);
  song: any;
  private idSong: string = '';
  public name: string = '';
  private playsongService = inject(PlaysongService);
  isFavorite: boolean = false;
  play: boolean = false;
  private router = inject(Router);
  currentTime: number = 0;
  image: any;
  duration: number = 0;
  formattedDurationTime: string = '00:00';
  formattedCurrentTime: string = '00:00';
  constructor(private modalCtrl: ModalController) {
    addIcons({ shareSocialOutline, heartOutline, heart, playSkipBackOutline, playSkipForwardOutline, playOutline, repeatOutline, shuffleOutline, chevronBackOutline, pauseOutline });
  }

  async ngOnInit() {
    this.idSong = this.song.song_id;
    this.name = this.song.artist.fullname;
    this.currentTitre = this.song.title;
    this.image = this.song.image;
    this.lastplayService.mylastplaylisteadd(this.song);
    this.playsongService.stop();
    this.playsongService.load(this.idSong);
    this.play = true;
    this.playsongService.play();

    if (this.favoriteService.isFavorite(this.song)) {
      this.isFavorite = true;
    }
    this.playsongService.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.playsongService.audio.duration;
      this.formattedDurationTime = this.formatTime(this.duration);
    });

    // Écoute les mises à jour de la position de lecture
    this.playsongService.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.playsongService.audio.currentTime;
      this.formattedCurrentTime = this.formatTime(this.currentTime);
    });


  }
  private formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60); // Calcul des minutes
    const secs: number = Math.floor(seconds % 60); // Calcul des secondes
    return `${this.pad(minutes)}:${this.pad(secs)}`; // Formatage HH:MM
  }
  private pad(val: number): string {
    return val < 10 ? '0' + val : val.toString();
  }
  playMusics() {
    if (this.play) {
      this.playsongService.pause();
    } else {
      this.playsongService.play();
    }
    this.play = !this.play;

  }

  Sharednetworks() {
    throw new Error('Method not implemented.');
  }
  toggleFavorite() {
    if (this.isFavorite) {
      this.favoriteService.removeFavorite(this.song);
      console.log(this.favoriteService.getFavoriteSongs());
    } else {
      this.favoriteService.addFavorite(this.song);
    }
    this.isFavorite = !this.isFavorite;
  }
  back() {
    this.router.navigate(['home/home'])
  }
  close() {
    this.modalCtrl.dismiss();
  }
  seekTo(event: any) {
    this.playsongService.audio.currentTime = event.detail.value;
  }

}
