import { AppState } from './../../state/app.state';
import { SongInfo } from './../../difs/song-info';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PlaylistActions from './../../state/actions/playlist.actions'
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
    private store: Store<AppState>
  ) {
    this.$playList = store.select('playlist');
  }

  ngOnInit(): void {
  }

  doDeleteSong(index: number): void {
    this.store.dispatch(new PlaylistActions.RemoveSong(index))
  }
}
