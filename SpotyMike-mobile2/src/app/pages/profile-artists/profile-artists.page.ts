import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonGrid, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/core/interfaces/song';

@Component({
  selector: 'app-profile-artists',
  templateUrl:'./profile-artists.page.html',
  styleUrls: ['./profile-artists.page.scss'],
  standalone: true,
  imports: [IonGrid, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfileArtistsPage implements OnInit {
  fullnameArtist: string="";
  currentArtist:any;

  private router = inject(Router);
  private profileArtist :Artist []=[];
  private firebaseService = inject(ServiceFirebaseService);
  modalCtrl: any;
 avatar: string ="";
modal: any;
  constructor() {
    addIcons({ chevronBackOutline })

  }

  async ngOnInit() {
      this.fullnameArtist = this.currentArtist.fullname;
      this.avatar = this.currentArtist.avatar;
      console.log(this.fullnameArtist);

    }
}
