<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
=======
import { Component, OnInit, APP_ID } from '@angular/core';
import { YelpService} from '../yelp.service';
import { Business} from '../businessModel';

>>>>>>> 33d806cc1bde064d0fc99dbdc8e7c7621d68b5aa

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

<<<<<<< HEAD
  latitude: number;
  longitude: number;
  zoom:number;

  constructor() { }

  ngOnInit() {
  	this.setCurrentLocation();
  }

// Get Current Location Coordinates
private setCurrentLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 15;
    });
=======
  business: Business[] = [];

  title = 'frontend';


  constructor(public yelpService : YelpService) { }

  getSearchBuiness(): void {
    this.yelpService.getSearchBuiness()
      .subscribe(data => {
        this.business = data;
        console.log(this.business);
      },
      error => {
        console.log(error);
      });
  }




  ngOnInit() {
   
    this.getSearchBuiness();
>>>>>>> 33d806cc1bde064d0fc99dbdc8e7c7621d68b5aa
  }
}

}
