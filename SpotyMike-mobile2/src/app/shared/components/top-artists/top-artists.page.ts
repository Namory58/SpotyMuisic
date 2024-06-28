import { Router } from '@angular/router';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { Artist } from './../../../core/interfaces/song';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, ModalController } from '@ionic/angular/standalone';
import { ProfileArtistsPage } from 'src/app/pages/profile-artists/profile-artists.page';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.page.html',
  styleUrls: ['./top-artists.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TopArtistsPage implements OnInit {

  private router = inject(Router);


  public allArtiste  :Artist[] = [] ;
  private ServiceFirebaseService = inject(ServiceFirebaseService);
  constructor(private modalCtrl: ModalController) { }

  async ngOnInit() {
    const answer = await this.ServiceFirebaseService.getTopArtist();
    this.allArtiste = answer.map((x :any)=>({
      artist_id: x.artist_id,
      createdAt: x.createdAt ,
      fullname: x.fullname,
      label: x.label,
      top_artist_count: x.top_artist_count,
      user_id: x.user_id,
      avatar :x.avatar,
    }));
  }
  async showProfile(fullname: string) {
    const currentArtist = this.allArtiste.find(item => item.fullname === fullname);
    const modal = await this.modalCtrl.create({
      component: ProfileArtistsPage,
      componentProps: { currentArtist },
    });
    modal.present();
  }
}
