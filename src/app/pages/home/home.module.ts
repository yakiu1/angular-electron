import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { GonButtonComponent } from '../../shared/components';

@NgModule({
  declarations: [HomeComponent, GonButtonComponent],
  imports: [CommonModule, HomeRoutingModule,SharedModule]
})
export class HomeModule { }
