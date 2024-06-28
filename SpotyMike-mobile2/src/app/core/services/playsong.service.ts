import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlaysongService {

  public audio: HTMLAudioElement;
  private isPlay$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.audio = new Audio();
    this.isPlay$ = new BehaviorSubject<boolean>(false);
  }

  async load(id: string) {
    this.audio = new Audio(`http://spotymike.eu-4.evennode.com/stream/${id}`);
    this.audio.load();
  }
  play() {
    this.audio.play();
    this.isPlay$.next(true);
  }
  pause() {
    this.audio.pause();
  }
  stop() {
    this.pause();
    this.audio.currentTime = 0; // Time playing song zero
    this.isPlay$.next(false);
  }
  getHeaders(id: string): Observable<{ [key: string]: string }> {
    const url = `http://spotymike.eu-4.evennode.com/stream/${id}`;
    return this.http.head(url, { observe: 'response' }).pipe(
      map(response => {
        const headers: { [key: string]: string } = {};
        response.headers.keys().forEach(key => {
          headers[key] = response.headers.get(key) || '';
        });
        return headers;
      })
    );
  }
}
