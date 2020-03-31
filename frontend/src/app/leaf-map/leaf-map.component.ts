import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { YelpService } from '../yelp.service';
import { Business } from '../businessModel';

@Component({
  selector: 'app-leaf-map',
  templateUrl: './leaf-map.component.html',
  styleUrls: ['./leaf-map.component.scss']
})
export class LeafMapComponent implements OnInit {

  //crete object for business
  business: Business[] = [];
  private map: L.Map;
  
  markers: L.Marker[];

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

  private initMap(): void {
      // Setting location to Boulder
      this.markers = [];
      var p1 = L.latLng(40.149152, -105.378020),
      p2 = L.latLng(39.957245, -105.170137),
      bounds = L.latLngBounds(p1, p2);
      this.map = L.map('map', {
        // maxBounds: bounds
      }).setView([40.0150, -105.2705], 12.5);
  
   
      var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
      }).addTo(this.map)
  }


  ngOnInit() {
    this.initMap();
    // this.getSearchBuiness('boulder');

  }


}
