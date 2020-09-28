import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { GonButtonComponent } from 'app/shared/components';

@NgModule({
  declarations: [HomeComponent, GonButtonComponent],
  imports: [CommonModule, HomeRoutingModule, YouTubePlayerModule]
})
export class HomeModule { }
