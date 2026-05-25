import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicStateService {

  private currentSong = new BehaviorSubject<any>(null);

  currentSong$ = this.currentSong.asObservable();

  playSong(song: any) {
    this.currentSong.next(song);
  }
}