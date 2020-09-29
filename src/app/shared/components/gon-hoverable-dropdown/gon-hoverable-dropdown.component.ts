import { SongInfo } from './../../../difs/song-info';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gon-hoverable-dropdown',
  templateUrl: './gon-hoverable-dropdown.component.html',
  styleUrls: ['./gon-hoverable-dropdown.component.scss']
})
export class GonHoverableDropdownComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() playList: SongInfo[];

  playListWithDisplayName = [];

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnChanges(): void {
    if(this.playList){
      this.playList.forEach(song => {
        const songWithDisplayName = Object.assign(song, {
          displayName: () => {
            const displayName: string = song.songName.length > 20 ?
              song.songName.substring(0, 24) + '...' :
              song.songName;
            return displayName;
          }
        })
        this.playListWithDisplayName.push(songWithDisplayName);
      })
    }
  }

  ngOnInit(): void {
  }

}
