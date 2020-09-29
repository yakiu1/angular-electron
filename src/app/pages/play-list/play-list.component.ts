import { SongInfo } from './../../difs/song-info';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {


  // 1葉幾筆
  $playList: Observable<SongInfo[]>;
  _playList: SongInfo[];
  constructor(
  ) {


  }

  ngOnInit(): void {
    this.addLinsters();
  }


  addLinsters(): void {
  }

  doDeleteSong(songData: SongInfo): void {

    const delIndex = this._playList.findIndex(song => song.songName === songData.songName);

    this._playList.splice(delIndex, 1);

  }
}
