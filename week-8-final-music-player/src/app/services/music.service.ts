import { Injectable } from '@angular/core';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  musicList: Music[] = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      genre: 'Pop'
    },

    {
      id: 2,
      title: 'Believer',
      artist: 'Imagine Dragons',
      album: 'Evolve',
      genre: 'Rock'
    },

    {
      id: 3,
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      album: 'Divide',
      genre: 'Pop'
    }
  ];

  constructor() {}

  getMusic(): Music[] {
    return this.musicList;
  }
}