import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  getSearchBuiness(): Observable<any> {
    var test = this.http.get('http://localhost:3000/business');
    console.log(test);
    return test;
  }

}
