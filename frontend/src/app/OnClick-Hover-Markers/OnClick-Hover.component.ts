import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OnClick-Hover-Markers',
  templateUrl: './OnCLick-Hover.component.html',
  styleUrls: ['./OnCLick-Hover.component.scss']
})
export class OnClickComponent implements OnInit {

  isResturantSelected: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
