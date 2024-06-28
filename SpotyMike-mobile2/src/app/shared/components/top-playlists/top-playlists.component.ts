import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-playlists',
  templateUrl: './top-playlists.component.html',
  styleUrls: ['./top-playlists.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar]

})
export class TopPlaylistsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
