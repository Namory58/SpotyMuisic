import { Component, OnInit, inject } from '@angular/core';
import { IonGrid, IonCol, IonRow, IonItem, IonThumbnail, IonLabel, IonContent, IonList, IonIcon } from '@ionic/angular/standalone';
import { Song } from 'src/app/core/interfaces/song';
import { LastplayService } from 'src/app/core/services/lastplay.service';

@Component({
  selector: 'app-lastplay',
  templateUrl: './lastplay.component.html',
  styleUrls: ['./lastplay.component.scss'],
  standalone: true,
  imports: [IonIcon, IonList, IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonItem,
    IonThumbnail,
    IonLabel

  ]
})
export class LastplayComponent implements OnInit {

  constructor() { }
  private lastplayAll = inject(LastplayService);
  public LastplaydedList: Song[] = [];

  ngOnInit() {
   this.lastplayAll.getmylastplayListe().subscribe(songs => {
      this.LastplaydedList = songs;
    });
  }



}
