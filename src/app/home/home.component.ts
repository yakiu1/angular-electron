import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  videoId = 'WBI_cOPTzPU'
  reframed: boolean;
  player: YT.Player;

  constructor(router: Router) {
    // this.version = NGYTPackage['dependencies']['ngx-youtube-player'].replace('^', '');
  }

  ngAfterContentInit(): void {
    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }

  ngOnInit(): void {

  }

  startVideo(): void {
    this.reframed = false;
    this.player = new window['YT'].Player('player', {
      videoId: this.videoId,
      events: {
        'onReady': this.videoReady.bind(this),
      }
    });

  }

  videoReady(evt: any): void {

    this.player.playVideo();
  }
}
