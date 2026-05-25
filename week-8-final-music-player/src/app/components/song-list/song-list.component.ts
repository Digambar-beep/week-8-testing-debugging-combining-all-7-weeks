import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MusicStateService } from '../../services/music-state.service';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongListComponent {

  songs = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 2, title: 'Levitating', artist: 'Dua Lipa' },
    { id: 3, title: 'Shape of You', artist: 'Ed Sheeran' }
  ];

  constructor(private musicState: MusicStateService) {}

  play(song: any) {
    this.musicState.playSong(song);
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}