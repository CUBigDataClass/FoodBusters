import { Component, OnInit, APP_ID } from '@angular/core';
import { YelpService} from '../yelp.service';
import { Business} from '../businessModel';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  business: Business[] = [];

  title = 'frontend';


  constructor(public yelpService : YelpService) { }

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
   
    this.getSearchBuiness('boulder');
  }

}
