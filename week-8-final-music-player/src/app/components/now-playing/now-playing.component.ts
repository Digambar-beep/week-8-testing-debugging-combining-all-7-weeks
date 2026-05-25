import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicStateService } from '../../services/music-state.service';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlayingComponent {

  currentSong$: Observable<any>;

  constructor(private musicState: MusicStateService) {
    this.currentSong$ = this.musicState.currentSong$;
  }
}