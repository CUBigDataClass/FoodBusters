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

  constructor(public yelpService : YelpService) { }

  getSearchBusiness(city): void {
    this.yelpService.getSearchBusiness(city)
      .subscribe(data => {
        this.business = data;
        console.log(this.business);
      },
      error => {
        console.log(error);
      });
  }

  private getSuggestions(city): void {
    this.getSearchBusiness(city);
    console.log(this.business);
  }

  ngOnInit(): void {
    this.getSuggestions('boulder');
  }

}
