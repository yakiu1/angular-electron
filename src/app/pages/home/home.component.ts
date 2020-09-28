import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { YtPlayerService } from 'app/shared/common/yt-player.service';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

  @ViewChild('footMenu', { static: true }) footMenu: ElementRef;


  test = [1, 1, 1];
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

    if (document.getElementsByTagName('script')[1].src !== 'https://www.youtube.com/iframe_api') {
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window['onYouTubeIframeAPIReady'] = () => {
        this.$isReadyVideo.next(true);
      }
    } else {
      this.$isReadyVideo.next(true);
    }
  }

  addListeners(): void {
    const _footMenuHTML = (this.footMenu.nativeElement as HTMLElement);
    const _footoptionArea = _footMenuHTML.querySelector('.foot-menu-area');

    this._eventSubscriptions.add(fromEvent(_footMenuHTML, 'mouseenter').subscribe(() => {
      _footoptionArea.classList.remove('fadeout');
      _footoptionArea.classList.add('fadein');
    }));

    this._eventSubscriptions.add(fromEvent(_footMenuHTML, 'mouseleave').subscribe(() => {
      _footoptionArea.classList.remove('fadein');
      _footoptionArea.classList.add('fadeout');
    }));

    this._isReadySubscription.add(this.$isReadyVideo.subscribe(isReady => {
      if (isReady) {
        this.player = this.ytPlayerService.startVideo(this.videoId);
      }
    }));

  }

  ngAfterContentInit(): void {
    this.addListeners();
    this.loadYoutubeAPI();

  }

  ngOnInit(): void {

  }


}
