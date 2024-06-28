import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { atOutline, heartOutline, home, homeOutline, musicalNote, musicalNoteOutline, pause, person, personOutline, play, shareSocialOutline } from 'ionicons/icons';

@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.modale.html',
  styleUrls:['./single-playlist.modale.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class SinglePlaylistModale implements OnInit {

  constructor() {
    addIcons({ heartOutline, play, pause, personOutline, homeOutline, musicalNoteOutline, shareSocialOutline});
  }

  ngOnInit() {
  }

}
