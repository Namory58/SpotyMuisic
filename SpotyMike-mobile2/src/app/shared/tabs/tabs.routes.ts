import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tab_routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
     {
         path: 'home',
         loadComponent: () =>
           import('../../pages/tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'like',
        loadComponent: () =>
          import('../../pages/tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'playlists',
        loadComponent: () =>
          import('../../pages/tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'playlist-id',
        loadComponent: () =>
          import('../../modale/single-playlist/single-playlist.modale').then((m) => m.SinglePlaylistModale),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../../pages/tab4/tab4.page').then((m) => m.Tab4Page),
      },
      // {
      //   path: '',
      //   redirectTo: '/home/home',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full',
  },
];
