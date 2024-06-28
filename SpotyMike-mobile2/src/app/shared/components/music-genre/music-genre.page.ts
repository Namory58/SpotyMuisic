import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-music-genre',
  templateUrl: './music-genre.page.html',
  styleUrls: ['./music-genre.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MusicGenrePage implements OnInit {
  selectGenre(category: string) {
    this.selectedGenre = category;
  }
  public musicGenre: string[] = [];
  selectedGenre: string = "";
  constructor() { }

  ngOnInit() {
    this.musicGenre = ["All", "R&B", "Pop", "Rock", "R&N&B", "gospel", "Soul", "Jazz"];
    this.selectedGenre = this.musicGenre[0];
  }

}
