import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { YelpService } from '../yelp.service';
import { Business } from '../businessModel';

import { restMarker } from '../marker';

@Component({
  selector: 'app-leaf-map',
  templateUrl: './leaf-map.component.html',
  styleUrls: ['./leaf-map.component.scss']
})
export class LeafMapComponent implements OnInit {

  //create object for business
  business: Business[] = [];
  private map: L.Map;
  markers: L.Marker[];

  constructor(public yelpService : YelpService) { }


  getSearchBusiness(city): void {
  this.yelpService.getSearchBusiness(city)
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
  

  this.yelpService.getSearchBusiness('boulder')
    .subscribe(business => {
      business.forEach(function(a) {

        console.log(a.coordinates['latitude']);

        var am = new this.RestMarker([a.coordinates['latitude'], a.coordinates['longitude']], {});

        if(a.coordinates['latitude'] != null && a.coordinates['longitude'] != null){

            am.setLocation(a);
            
            am.on('click', function() {
              //this.restaurantInfoPannel
            }, this);

            this.markers.push(am);
          }
      }, this);

      L.featureGroup(this.markers).addTo(this.map);
    });
  }

  ngOnInit() {
    this.initMap();
    this.getSearchBusiness('boulder');
  }
}
