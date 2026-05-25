import { Injectable } from '@angular/core';
import { Track } from '../models/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  tracks: Track[] = [
    { id: 1, title: 'Believer', artist: 'Imagine Dragons' },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: 3, title: 'Blinding Lights', artist: 'The Weeknd' }
  ];

  playlist: Track[] = [];

  getTracks() {
    return this.tracks;
  }

  getPlaylist() {
    return this.playlist;
  }

  addToPlaylist(track: Track) {
    this.playlist.push(track);
    this.savePlaylist();
  }

  removeFromPlaylist(index: number) {
    this.playlist.splice(index, 1);
    this.savePlaylist();
  }

  savePlaylist() {
    localStorage.setItem('playlist', JSON.stringify(this.playlist));
  }

  loadPlaylist() {
    const data = localStorage.getItem('playlist');

    if (data) {
      this.playlist = JSON.parse(data);
    }
  }
}