import { Component, OnInit } from '@angular/core';

import { YelpService } from '../service/yelp.service';
import { Business } from '../businessModel';
import { CityClickService } from '../service/city-click.service';
import { Nightlife } from '../nightlifeModel'
import { LeafMapComponent } from '../leaf-map/leaf-map.component';
import { NightLifeServiceService } from '../service/night-life-service.service';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  //create object for business
  business: Business[];
  top3Businesses: Business[] = [];
  nightlife: Nightlife[] = [];
  top3Nightlife: Nightlife[] = [];
  city:String;
  isNightlife: Boolean = false;
  _subscription:any;

  constructor(public yelpService : YelpService, public cityClickService : CityClickService, private NightLifeServiceService: NightLifeServiceService) {
    this.isNightlife = NightLifeServiceService.isNightlife;
    this._subscription = NightLifeServiceService.isNightlifeChange.subscribe((value) => { 
      this.isNightlife = value; 
      this.getSelectOption();
    });
  }
   businessObserver = {
    next: x => this.Updatebusiness(x),
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer.got a complete notification'),
  };

  nightlifeObserver = {
    next: x => this.UpdateNightlife(x),
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer.got a complete notification'),
  };

  Updatebusiness(x) {
    this.business = x;
    this.isNightlife = false;
    this.getSuggestions(this.city,false);
  }

  UpdateNightlife(x) {
    this.nightlife = x;
    this.isNightlife = true;
    this.getSuggestions(this.city,true);
  }


  getSearchBusiness(city){
   
    this.business = this.cityClickService.getBusinessService();
    this.top3Businesses = this.business.slice(0,3);
    this.sortBusinessesByRating(false);

  }

  getSearchNightlife(city){
    this.sortBusinessesByRating(true);
    this.top3Nightlife = this.nightlife.slice(0,3);
  }


  getSuggestions(city, isNightlife): void{
    this.city = this.cityClickService.getCity();
    if(isNightlife) {
      this.getSearchNightlife(this.city);
    }
    else {
      this.getSearchBusiness(this.city);
    }
  }

  getSelectOption(): void{
    if(!this.isNightlife){
      this.yelpService.getBusiness(this.city);
      this.yelpService.businessSource.subscribe(this.businessObserver);
      this.getSuggestions(this.city,false);
    }
    else  {
      this.yelpService.getNightlife(this.city);
      this.yelpService.nightlifeSource.subscribe(this.nightlifeObserver);
      this.getSuggestions(this.city,true);
    }
  }

  private sortBusinessesByRating(isNightlife): void {
    if(isNightlife){
      this.nightlife.sort((n1,n2) => {
        if (n1.interested_count < n2.interested_count) {
            return 1;
        }
  
        else if (n1.interested_count > n2.interested_count) {
            return -1;
        }
        else return 0;
      });
    }
    else {
      this.business.sort((n1,n2) => {
        if (n1.rating < n2.rating) {
            return 1;
        }
    
        else if (n1.rating > n2.rating) {
            return -1;
        }
        else return 0;
      });
    }
  }

  ngOnInit(): void {

    this.getSelectOption();
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._subscription.unsubscribe();
   }

}
