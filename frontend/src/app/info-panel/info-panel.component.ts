import { Component, OnInit } from '@angular/core';
import {InfoPanelService} from '../info-panel.service';
import {Business} from '../businessModel';
import { YelpService } from '../yelp.service';


@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {




   add(business: Business) {
    this.infoPanelService.add(business);
  }

  constructor(public infoPanelService: InfoPanelService) { }




ngOnInit(): void {

  }

}
