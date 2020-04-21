import { Component, OnInit } from '@angular/core';
import { InfoPanelService } from '../info-panel.service';
import {Business} from '../businessModel';
import { YelpService } from '../yelp.service';
import { NightLifeServiceService } from '../night-life-service.service';
import { Nightlife } from '../nightlifeModel';




@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})

export class InfoPanelComponent implements OnInit {

   add(business: Business): void {
    console.log(typeof business);
    this.infoPanelService.add(business);
  }

  	// add(nightlife: Nightlife):{
  	// 	console.log(typeof nightlife);
  	// 	this.NightLifeServiceService.add(nightlife);
  	// }

constructor(public infoPanelService: InfoPanelService, public NightLifeServiceService:NightLifeServiceService) { }


ngOnInit(): void {

  }

}
