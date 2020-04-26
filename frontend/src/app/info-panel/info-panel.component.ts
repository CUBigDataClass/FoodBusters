import { Component, OnInit } from '@angular/core';
import { InfoPanelService } from '../service/info-panel.service';
import {Business} from '../businessModel';
import { YelpService } from '../service/yelp.service';
import { NightLifeServiceService } from '../service/night-life-service.service';
import { Nightlife } from '../nightlifeModel';
import { CityClickService } from '../service/city-click.service';
import{ Review } from '../reviewsModel';



@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})

export class InfoPanelComponent implements OnInit {

  reviews: Review[] = [];
  business: Business;


   add(business: Business): void {
     console.log("hi")
     this.business = business;
    this.infoPanelService.add(business);
    console.log("getReviews",this.infoPanelService.getReviews());
    // this.getReviews(business.id);
  }

  	// addNightlife(nightlife: Nightlife): void{
  	// 	this.infoPanelService.addNightlife(nightlife);
  	// }

  constructor(public infoPanelService: InfoPanelService, public CityClickService : CityClickService, public yelpService: YelpService) { }


  onClose() {
    console.log("onClose()");
    this.infoPanelService.hidePanel();
  }

  // getReviews(businessId: String){
  //   this.yelpService.getReviews(businessId);
  //   console.log("reviews:",this.reviews);
  // }

  ngOnInit(): void {
    
  }

}
