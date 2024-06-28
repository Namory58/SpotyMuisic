import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"spotymike-fffb7","appId":"1:716009130378:web:1bbd99136289506ae42073","storageBucket":"spotymike-fffb7.appspot.com","apiKey":"AIzaSyDlnpYYWeNaOgwM3iCWNaagwpQH1jvEkvg","authDomain":"spotymike-fffb7.firebaseapp.com","messagingSenderId":"716009130378","measurementId":"G-3VTV20Y3HW"})), provideAuth(() => getAuth()),
  ],
});
