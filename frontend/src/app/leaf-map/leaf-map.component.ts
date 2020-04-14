import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';

import { YelpService } from '../yelp.service';
import { Business } from '../businessModel';
import { Router, Routes } from '@angular/router';

import { restMarker } from '../marker';
import { CityClickService } from '../city-click.service';

@Component({
  selector: 'app-leaf-map',
  templateUrl: './leaf-map.component.html',
  styleUrls: ['./leaf-map.component.scss']
})

export class LeafMapComponent implements OnInit {



  Icon = L.icon({
    iconUrl: '../assets/img/Minilogo.png',

    iconSize: [35,35]
  });

  LocationMarker = L.Marker.extend({

    options: {
      icon: this.Icon
    },


    setLocation: function(business: Business) {
      this.business = business;
    },

    getLocation: function(): Business{
      return this.business;
    }

  });

  //create object for business
  business: Business[] = [];
  private map: L.Map;
  markers: L.Marker[];
  city:String;
  coordinates: object;
  

  constructor(public yelpService : YelpService, public CityClickService : CityClickService) {
    this.city = 'denver';
    // this.coordinates = {'lat' :40.014984, 'long':-105.270546};
     
   }
 


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

  setCity(city): void{
    this.CityClickService.setCity(city)
    console.log('this city is set ', city);
  }

  getCity() {
    this.city = this.CityClickService.getCity();
    console.log('Get city: ', this.city)
    return this.city;
  }

  getCoordinate(city){
    
    this.coordinates = this.CityClickService.getCity_Coordinates(city);
    console.log("coordinate", this.coordinates['lat']);
    return this.coordinates;
    
  }
  // console.log("This city is clicked " + this.getCity());
  private initMap(): void {
    // Setting location to Boulder
    this.markers = [];
    this.map = L.map('map').locate({setView: true, maxZoom:8});

    var latLon = L.latLng(40.016984,-105.270546);
    var bounds = latLon.toBounds(10000); // 10000 = metres
    this.map.panTo(latLon).fitBounds(bounds);

    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(this.map)

   
    // this.city = city
    this.yelpService.getSearchBusiness('boulder')
    .subscribe(business => {
      business.forEach(function(a) {

        // console.log(a.coordinates['latitude']);

        var am = new this.LocationMarker([a.coordinates['latitude'], a.coordinates['longitude']], {});

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

  CityMap(city): void {
    // Setting location to Boulder
    // this.city = city;
    this.setCity(city);
    this.getCoordinate(this.getCity());
   
    this.markers = [];
    if(this.map) {
      this.map.remove();
    }

    this.map = L.map('map').locate({setView: true, maxZoom:8});
    console.log(this.getCity + ' latitude ', this.coordinates['lat']);
    console.log(this.getCity + ' long ', this.coordinates['long']);
    var latLon = L.latLng(this.coordinates['lat'], this.coordinates['long']);
    var bounds = latLon.toBounds(10000); // 10000 = metres
    this.map.panTo(latLon).fitBounds(bounds);


    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(this.map)

   
    this.yelpService.getSearchBusiness(this.getCity())
    .subscribe(business => {
      business.forEach(function(a) {

        var am = new this.LocationMarker([a.coordinates['latitude'], a.coordinates['longitude']], {});

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
    this.getSearchBusiness(this.city);
  }
}
