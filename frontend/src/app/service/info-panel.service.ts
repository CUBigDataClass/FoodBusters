import { Injectable } from '@angular/core';
import { Business } from '../businessModel';
import { Nightlife } from '../nightlifeModel';
import{ Review } from '../reviewsModel';
import { YelpService } from './yelp.service';



@Injectable({
  providedIn: 'root',
})
export class InfoPanelService {
  show: boolean = false;
  business: Business = null;
  nightLife: Nightlife = null;
  open: boolean = true;
  review: Review[] = [];

  reviewObserver = {
    next: x => this.UpdateReview(x),
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer.got a complete notification'),
  };

  UpdateReview(review) {
    this.review = review;
  }

  showPanel(): void {
      this.show = true;
      console.log("showPanel is ", this.show);
  }

  hidePanel(): void {
    this.show = false;
    this.open = true;
    console.log("hidePanel is ", this.show);
  }

  add = (business: Business): void => {
    this.open = false;
    this.business = business;
    console.log("hi",this.business);
    this.yelpService.getReviews(business.id);
    this.yelpService.reviewSource.subscribe(this.reviewObserver);
    console.log("reviews:",this.review);
  }

  addNight(nightLife: Nightlife): void{
    this.open = false;
    this.nightLife = nightLife;
    console.log("night life add ", this.nightLife);
  }

  getReviews(){
    console.log("get reviews",this.review);
    return this.review;
  }

  constructor(public yelpService: YelpService) { }
}
