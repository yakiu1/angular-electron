import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gon-hoverable-dropdown',
  templateUrl: './gon-hoverable-dropdown.component.html',
  styleUrls: ['./gon-hoverable-dropdown.component.scss']
})
export class GonHoverableDropdownComponent implements OnInit {

  playlist = [1, 1, 1, 1];
  constructor() { }

  ngOnInit(): void {
  }

}
