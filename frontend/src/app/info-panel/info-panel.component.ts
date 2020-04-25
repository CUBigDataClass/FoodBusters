import { Component, OnInit } from '@angular/core';
import { InfoPanelService } from '../service/info-panel.service';
import {Business} from '../businessModel';
import { YelpService } from '../service/yelp.service';
import { NightLifeServiceService } from '../service/night-life-service.service';
import { Nightlife } from '../nightlifeModel';
import { CityClickService } from '../service/city-click.service';



@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})

export class InfoPanelComponent implements OnInit {



   add(business: Business): void {
    this.infoPanelService.add(business);
  }

  	// addNightlife(nightlife: Nightlife): void{
  	// 	this.infoPanelService.addNightlife(nightlife);
  	// }

  constructor(public infoPanelService: InfoPanelService,
             public CityClickService : CityClickService) { }


  onClose() {
    console.log("onClose()");
    this.infoPanelService.hidePanel();
  }
ngOnInit(): void {

  }

}
