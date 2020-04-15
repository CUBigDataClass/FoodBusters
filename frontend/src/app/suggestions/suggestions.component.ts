import { Component, OnInit } from '@angular/core';

import { YelpService } from '../yelp.service';
import { Business } from '../businessModel';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  //create object for business
  business: Business[] = [];
  top3Businesses: Business[] = [];

  constructor(public yelpService : YelpService) { }

  getSearchBusiness(city): void {
    this.yelpService.getSearchBusiness(city)
      .subscribe(data => {
        this.business = data;
        this.sortBusinessesByRating();
        this.top3Businesses = this.business.slice(0,3);
        console.log(this.top3Businesses);
      },
      error => {
        console.log(error);
      });
  }

  getSuggestions(city){
    return this.getSearchBusiness(city);
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
      // console.log(this.business);
      
      
  }

  ngOnInit(): void {
    this.getSuggestions('boulder');
  }

}
