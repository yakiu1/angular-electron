import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss']
})
export class PlayListComponent implements OnInit {

  // 1葉幾筆
  list = [1, 1, 1, 1, 1, 1];
  constructor() { }

  ngOnInit(): void {

  }


  addLinsters(): void {

  }
}
