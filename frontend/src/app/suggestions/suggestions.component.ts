import { Component, OnInit } from '@angular/core';

import { YelpService } from '../service/yelp.service';
import { Business } from '../businessModel';
import { CityClickService } from '../service/city-click.service';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  //create object for business
  business: any;
  top3Businesses: Business[] = [];
  city:String
  constructor(public yelpService : YelpService, public cityClickService : CityClickService) {
    this.city = 'boulder'
   }

  

  getSearchBusiness(city){
    
    this.business = this.cityClickService.getBusinessService();
    console.log('get business for suggestion ', this.business);
    this.sortBusinessesByRating();
    // this.top3Businesses = this.business.slice(0,3);
    // console.log('Top3Businesses: ',this.top3Businesses);
  }


  getSuggestions(): void{
    this.city = this.cityClickService.getCity();
    console.log('city in suggestion ', this.cityClickService.getCity())
    this.getSearchBusiness(this.city);
  }

  private sortBusinessesByRating(): void {
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

  ngOnInit(): void {
    
    this.getSuggestions();
    
  }

}
