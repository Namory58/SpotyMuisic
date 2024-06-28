import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { Album } from './../../../core/interfaces/album';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-album',
  templateUrl: './top-album.page.html',
  styleUrls: ['./top-album.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TopAlbumPage implements OnInit {

  public listAlbum :Album [] = [];
  private FirebaseService = inject(ServiceFirebaseService);
  private router  = inject(Router);

  constructor() { }

  async ngOnInit() {
    const allAlbum = await this.FirebaseService.getTopAlbum();
    this.listAlbum = allAlbum.map((x:any)=>({
      album_id :x.album_id,
      artist_id :x.artist_id,
      categorie :x.categorie,
      cover : x.cover,
      featuring : x.featuring,
      titre : x.titre,
      top_album_count:x.top_album_count
    }))
  }
  showerAlbum() {
    throw new Error('Method not implemented.');
    }

}
