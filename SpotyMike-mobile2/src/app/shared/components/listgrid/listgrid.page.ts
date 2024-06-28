import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonAvatar, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-listgrid',
  templateUrl: './listgrid.page.html',
  styleUrls: ['./listgrid.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListgridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
