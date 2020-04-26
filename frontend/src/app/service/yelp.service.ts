import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of , BehaviorSubject} from 'rxjs';
import { Business } from '../businessModel';
import { Nightlife } from '../nightlifeModel';
import { Review } from '../reviewsModel';

export interface BusinessResponse {
  body: [];
}

@Injectable({
  providedIn: 'root'
})

export class YelpService {

  BASE_URL = 'http://localhost:3000/';

  // private business: BusinessResponse;
  // businessSource = new BehaviorSubject<BusinessResponse>({ body : []});
  business: Business[];

  businessSource = new BehaviorSubject<Business[]>([]); 
  

  nightLife: Nightlife[];
  nightlifeSource = new BehaviorSubject<Nightlife[]>([]);

  review: Review[];
  reviewSource = new BehaviorSubject<Review[]>([]);


  constructor(private http: HttpClient) { }

  getBusiness(city:any) {
    this.http.get<Business[]>(this.BASE_URL + 'business/' + city)
    .subscribe(data => {
      this.business = data;
      // console.log('get business service ', this.business);
      this.businessSource.next(this.business);
    })
  }


  getNightlife(city:any) {
    this.http.get<Nightlife[]>(this.BASE_URL + 'nightlife/' + city)
    .subscribe(data => {
      this.nightLife = data;
      // console.log('get nightlife service ', this.nightLife);
      this.nightlifeSource.next(this.nightLife);
    })
  }

  getReviews(id:any) {
    this.http.get<Review[]>(this.BASE_URL + 'reviews/' + id)
    .subscribe(data => {
      this.review = data;
      console.log('get review service ', this.review);
      console.log(this.reviewSource.next(this.review));
    })
  }
}
