import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  //get all business in the city you pass
  getSearchBusiness(city: any): Observable<any> {
    var test = this.http.get('http://localhost:3000/business/' + city);
    console.log(test);
    return test;
  }

  //get all business delail of each business by passing id of that business
  getBusinessDetail(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/business/' + id);
  }


}
