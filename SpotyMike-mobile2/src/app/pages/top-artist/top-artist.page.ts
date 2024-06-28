import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonIcon, IonItemDivider, IonItem, IonItemSliding, IonLabel, ModalController } from '@ionic/angular/standalone';
import { Artist } from 'src/app/core/interfaces/song';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { ProfileArtistsPage } from '../profile-artists/profile-artists.page';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.page.html',
  styleUrls: ['./top-artist.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItemSliding, IonItem, IonItemDivider, IonIcon, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TopArtistPage implements OnInit {

  public allArtiste: Artist[] = [];
  private ServiceFirebaseService = inject(ServiceFirebaseService);
  private router = inject(Router);

  constructor(private modalCtrl: ModalController) {
    addIcons({ chevronBackOutline })
  }

  async ngOnInit() {
    const answer = await this.ServiceFirebaseService.getTopArtist();
    this.allArtiste = answer.map((x: any) => ({
      artist_id: x.artist_id,
      createdAt: x.createdAt,
      fullname: x.fullname,
      label: x.label,
      top_artist_count: x.top_artist_count,
      user_id: x.user_id,
      avatar: x.avatar,
    }));
  }
  back() {
    this.router.navigate(['/home/home'])
    throw new Error('Method not implemented.');
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
