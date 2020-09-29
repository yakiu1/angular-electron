import { SongInfo } from './../../../difs/song-info';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gon-list-item',
  templateUrl: './gon-list-item.component.html',
  styleUrls: ['./gon-list-item.component.scss']
})
export class GonListItemComponent implements OnInit {

  @Output() delete = new EventEmitter<SongInfo>();

  @Input() songName: string;

  constructor() { }

  ngOnInit(): void {
  }

  doDeleteSong(songName: string): void {
    const songInfo: SongInfo = {
      songName: songName,
      songTag: '',
    }
    this.delete.emit(songInfo);
  }
}
