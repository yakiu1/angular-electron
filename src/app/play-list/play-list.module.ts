import { PlayListComponent } from './play-list.component';
import { NgModule } from '@angular/core';
import { PlayListRoutingModule } from './play-list-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PlayListComponent],
  imports: [CommonModule, PlayListRoutingModule]
})
export class PlayListModule { }
