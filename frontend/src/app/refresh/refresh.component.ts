import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CityClickService } from '../service/city-click.service';
import { YelpService } from '../service/yelp.service';
import { NightLifeServiceService } from '../service/night-life-service.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit {

  _subscription: any;
  isNightlife: Boolean;

  constructor(private _location: Location, private _router: Router, public cityClickService : CityClickService,
              public yelpService : YelpService, private nightlifeService: NightLifeServiceService) { 
    this._subscription = nightlifeService.isNightlifeChange.subscribe((value) => { 
      this.isNightlife = value; 
    });
  }

  setIsNightlife(option:boolean) {
    this.nightlifeService.change(option);
    this.isNightlife = option;
  }

  ngOnInit(): void {
   
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._subscription.unsubscribe();
   }

  refresh(){
  	console.log(this._router.url);
  	// this.map.remove();
  	this._router.navigateByUrl('/home');
  }

}
