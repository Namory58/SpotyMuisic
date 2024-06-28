import { Routes } from '@angular/router';
import { tab_routes } from './shared/tabs/tabs.routes';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./layout/auth/auth.page').then(m => m.AuthPage),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'  // Add pathMatch property
  },
  ...tab_routes,
  {
    path: 'music-genre',
    loadComponent: () => import('./shared/components/music-genre/music-genre.page').then( m => m.MusicGenrePage)
  },
  {
    path: 'top-song',
    loadComponent: () => import('./pages/top-song/top-song.page').then( m => m.TopSongPage)
  },
  {
    path: 'top-artists',
    loadComponent: () => import('./shared/components/top-artists/top-artists.page').then( m => m.TopArtistsPage)
  },
  {
    path: 'top-album',
    loadComponent: () => import('./shared/components/top-album/top-album.page').then( m => m.TopAlbumPage)
  },
  {
    path: 'topAllalbum',
    loadComponent: () => import('./pages/top-album/top-album.page').then( m => m.TopAlbumPage)
  },
  {
    path: 'topAllartist',
    loadComponent: () => import('./pages/top-artist/top-artist.page').then( m => m.TopArtistPage)
  },







]
