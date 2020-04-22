import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of , BehaviorSubject} from 'rxjs';
import { Business } from '../businessModel';

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

  constructor(private http: HttpClient) { }

  getBusiness(city:any) {
    this.http.get<Business[]>(this.BASE_URL + 'business/' + city)
    .subscribe(data => {
      this.business = data;
      console.log('get business service ', this.business);
      this.businessSource.next(this.business);
    })
  }


  // //get all business in the city you pass
  // getSearchBusiness(city: any): Observable<any> {
  //   return this.http.get('http://localhost:3000/business/' + city);
  
  // }

  // //get all business delail of each business by passing id of that business
  // getBusinessDetail(id: any): Observable<any> {
  //   return this.http.get('http://localhost:3000/business/' + id);
  // }

  // //get all review detail of the business by the id
  // getReviewDetail(id: any): Observable<any> {
  //   return this.http.get('http://localhost:3000/reviews/' + id);
  // }

  // //get all review detail of the business by the id
  // getNightlife(city: any): Observable<any> {
  //   return this.http.get('http://localhost:3000/nightlife/' + city);
  // }
  



}
