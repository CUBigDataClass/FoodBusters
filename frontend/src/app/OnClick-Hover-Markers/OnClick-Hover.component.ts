import { Component, OnInit } from '@angular/core';

import { YelpService } from '../service/yelp.service';
import { Business } from '../businessModel';

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
