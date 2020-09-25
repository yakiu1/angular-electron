import { YtPlayerService } from './../shared/common/yt-player.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  isReadySubscription = new Subscription();
  $isReadyVideo = new BehaviorSubject<boolean>(false);
  videoId = 'WBI_cOPTzPU'
  reframed: boolean;
  player: YT.Player;

  constructor(router: Router, private ytPlayerService: YtPlayerService) {

  }

  loadYoutubeAPI(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window['onYouTubeIframeAPIReady'] = () => {
      this.$isReadyVideo.next(true);
    }
  }

  addListeners(): void {

    this.isReadySubscription = this.$isReadyVideo.subscribe(isReady => {
      if (isReady) {
        console.log('API Ready!');
        this.player = this.ytPlayerService.startVideo(this.videoId);
        // DoSometingWhenReady
        // this.addListeners();
      }
    })
  }

  ngAfterContentInit(): void {
    this.addListeners();
    this.loadYoutubeAPI();
    // this.player.playVideo();
    console.log('XD');

  }

  ngOnInit(): void {

  }


}
