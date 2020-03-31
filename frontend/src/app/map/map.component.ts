import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { YelpService } from '../yelp.service';
import { Business } from '../businessModel';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    latitude: number = -23.8779431;
    longitude: number = -49.8046873;
    zoom:number = 15;

    business: Business[] = [];
    constructor(public yelpService : YelpService) { }

  
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.latitude);
        this.zoom = 15;
      });
    }
  }

  getSearchBuiness(city): void {
  this.yelpService.getSearchBuiness(city)
    .subscribe(data => {
      this.business = data;
      console.log(this.business);
    },
    error => {
      console.log(error);
    });
}


  ngOnInit() {
    this.setCurrentLocation();
    this.getSearchBuiness('boulder');

  }

  
}
  



