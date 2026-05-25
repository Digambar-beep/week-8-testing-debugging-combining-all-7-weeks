import { Component } from '@angular/core';

import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PlayerControlsComponent } from './components/player-controls/player-controls.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    NowPlayingComponent,
    PlayerControlsComponent,
    SongListComponent,
    MusicPlayerComponent,
    MusicListComponent,
    PlaylistComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'week-8-final-music-player';
}