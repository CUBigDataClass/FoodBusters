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
}
