import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})

export class MusicPlayerComponent {

  audio: HTMLAudioElement = new Audio();

  currentSong: string = 'No Song Playing';

  songs = [
    {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      audio: 'assets/song1.mp3',
      cover: 'assets/cover1.png'
    },

    {
      title: 'Believer',
      artist: 'Imagine Dragons',
      audio: 'assets/song2.mp3',
      cover: 'assets/cover2.png'
    },

    {
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      audio: 'assets/song3.mp3',
      cover: 'assets/cover3.png'
    }
  ];

  playSong(path: string, title: string): void {

    this.audio.src = path;

    this.audio.load();

    this.audio.play();

    this.currentSong = title;
  }

  pauseSong(): void {

    this.audio.pause();

  }

}