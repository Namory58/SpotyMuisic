import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {heartOutline,personOutline,homeOutline,musicalNotesOutline } from 'ionicons/icons';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  private albumService = inject(ServiceFirebaseService)

  constructor() {
    addIcons({ heartOutline,personOutline,homeOutline,musicalNotesOutline});
  }
}
