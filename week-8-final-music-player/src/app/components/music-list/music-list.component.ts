import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MusicService } from '../../services/music.service';
import { Music } from '../../models/music';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  music: Music[] = [];
  filteredMusic: Music[] = [];
  searchText: string = '';

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.music = this.musicService.getMusic();
    this.filteredMusic = this.music;
  }

  searchMusic() {
    this.filteredMusic = this.music.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.artist.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}