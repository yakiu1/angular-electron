import { YtPlayerService } from './../shared/common/yt-player.service';
import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  @ViewChild('footMenu', { static: true }) footMenu: ElementRef;


  _isReadySubscription = new Subscription();
  _eventSubscriptions = new Subscription();
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
    const _footMenuHTML = (this.footMenu.nativeElement as HTMLElement);

    this._eventSubscriptions.add(fromEvent(_footMenuHTML, 'mouseenter').subscribe(() => {
      _footMenuHTML.querySelector('.foot-menu-area').classList.remove('fadeout');
      _footMenuHTML.querySelector('.foot-menu-area').classList.add('fadein');
    }));

    this._eventSubscriptions.add(fromEvent(_footMenuHTML, 'mouseleave').subscribe(() => {
      _footMenuHTML.querySelector('.foot-menu-area').classList.remove('fadein');
      _footMenuHTML.querySelector('.foot-menu-area').classList.add('fadeout');
    }));

    this._isReadySubscription.add(this.$isReadyVideo.subscribe(isReady => {
      if (isReady) {
        console.log('API Ready!');
        this.player = this.ytPlayerService.startVideo(this.videoId);
        // DoSometingWhenReady
        // this.addListeners();
      }
    }));

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
