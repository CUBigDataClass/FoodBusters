import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CityClickService } from '../service/city-click.service';
import { YelpService } from '../service/yelp.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit {

  constructor(private _location: Location, private _router: Router, public cityClickService : CityClickService,
              public yelpService : YelpService) { 
  	console.log('constructor ran');
  }

  


  ngOnInit(): void {
   
  }

  refresh(){
  	console.log(this._router.url);
  	// this.map.remove();
  	this._router.navigateByUrl('/home');
  }

}
