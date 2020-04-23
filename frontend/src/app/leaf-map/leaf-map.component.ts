import { Component, OnInit, AfterViewInit, Input, OnChanges, HostBinding } from '@angular/core';
import * as L from 'leaflet';
import { YelpService, BusinessResponse } from '../service/yelp.service';
import { Business } from '../businessModel';
import { Nightlife } from '../nightlifeModel';

import { CityClickService } from '../service/city-click.service';
import { InfoPanelService } from '../service/info-panel.service';

import { Router, Routes } from '@angular/router';



@Component({
  selector: 'app-leaf-map',
  templateUrl: './leaf-map.component.html',
  styleUrls: ['./leaf-map.component.scss']
})

export class LeafMapComponent implements OnInit {


 //if(nightlife click)
 //else() : display restaurants








  //create object for business
  business: Business[];
  nightlife: Nightlife[] = [];
  private map: L.Map;
  markers: L.Marker[];
  city:String;
  coordinates: object;

  //Icon for Restaurants
  Icon = L.icon({
    iconUrl: '../assets/img/Minilogo.png',

    iconSize: [35,35]
  });

  //Icon for Night Life
  Icon2 = L.icon({
    iconUrl: '../assets/img/nightMarker.png',

    iconSize: [35,35]
  })

  //Setting up markers for Restaurants
  LocationMarker = L.Marker.extend({

    options: {
      icon: this.Icon,
    },

    setLocation: function(business: Business) {
      this.business = business;
    },

    getLocation: function(): Business{
      return this.business;
    },

    // bindPopup: function ( content) {
    //   this.LocationMarker.bindPopup( content);
    //   return this;
    // },

    // setPopupContent: function (content) {
    //   this.LocationMarker.setPopupContent(content);
    //   return this;
    // },

    // unbindPopup: function () {
    //   this.LocationMarker.unbindPopup();
    //   return this;
    // }

  });



  businessObserver = {
    next: x => this.Updatebusiness(x),
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer.got a complete notification'),
  };

  nightlifeObserver = {
    next: x => this.UpdateNightlife(x),
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer.got a complete notification'),
  };

  constructor(public infoPanelService: InfoPanelService, public yelpService : YelpService, public CityClickService : CityClickService)
  {
    this.business = [];
    this.nightlife = [];
    this.city = 'boulder';

  }


  //Setting up markers for Nightlife
  LocationMarker2 = L.Marker.extend({

    options: {
      icon: this.Icon2
    },

    setLocation: function(nightlife: Nightlife) {
      this.nightlife = nightlife;
    },

    getLocation: function(): Nightlife{
      return this.nightlife;
    },

  });




  //function to get the night life
  getNightlife(city): void {
    this.yelpService.getNightlife(city)
    .subscribe(data => {
      this.nightlife = data;
      console.log(this.nightlife);
    },
    error => {
      console.log(error);
    });
  }


  setCity(city): void{
    this.city = city;
    this.CityClickService.setCity(city);
    console.log('this city is set ', city);
  }

  getCity() {
    // this.city = this.CityClickService.getCity();
    console.log('Get city: ', this.city)
    return this.city;
  }

  getCoordinate(city){

    this.coordinates = this.CityClickService.getCity_Coordinates(city);
    // console.log("coordinate", this.coordinates['lat']);
    return this.coordinates;

  }

  Updatebusiness(x) {
    this.business = x;
    console.log('update business: ', this.business);
    this.CityClickService.setCity(this.city);
    this.markers = [];

    this.business.forEach(function(a) {
      // console.log(a);
      var am = new this.LocationMarker([a.coordinates['latitude'], a.coordinates['longitude']], {title: a.name});

      if(a.coordinates['latitude'] != null && a.coordinates['longitude'] != null){

        am.setLocation(a);

        am.on('click', function() {
          this.infoPanelService.add(am.getLocation());
          this.infoPanelService.showPanel();

        }, this);

        this.markers.push(am);
      }
    }, this);

    if(this.markers.length !=0) {
      L.featureGroup(this.markers).addTo(this.map);
      this.CityClickService.add(this.business);
    } else {
      console.log('no markers');
    }

  }

  UpdateNightlife(x) {
    this.nightlife = x;
    console.log('update business: ', this.nightlife);
    this.CityClickService.setCity(this.city);
    this.markers = [];

    this.nightlife.forEach(function(a) {
      // console.log(a);
      var am = new this.LocationMarker([a.latitude, a.longitude], {title: a.name});

      if(a.latitude != null && a.longitude != null){

        am.setLocation(a);

        am.on('click', function() {
          this.infoPanelService.add(am.getLocation());
          this.infoPanelService.showPanel();

        }, this);

        this.markers.push(am);
      }
    }, this);

    if(this.markers.length !=0) {
      L.featureGroup(this.markers).addTo(this.map);
      this.CityClickService.add(this.nightlife);
    } else {
      console.log('no markers');
    }

  }




  // console.log("This city is clicked " + this.getCity());
  initMap(): void {
    // Setting location to Boulder
    this.markers = [];
    // if this.map

    this.map = L.map('map').locate({setView: true, maxZoom:8});

    var latLon = L.latLng(40.016984,-105.270546);
    var bounds = latLon.toBounds(5000); // 10000 = metres
    this.map.panTo(latLon).fitBounds(bounds);

    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(this.map)


    //this is for the night life functionality
    this.yelpService.getNightlife('boulder').subscribe(nightlife => {
      nightlife.forEach(function(x) {

        var ab = new this.LocationMarker2([x.latitude, x.longitude], {title: x.name});
        if(x.latitude != null && x.longitude != null){

          ab.setLocation(x);

          ab.on('click', function() {
             this.infoPanelService.add(ab.getLocation());
            this.infoPanelService.showPanel();
          }, this);

          this.markers.push(ab);
        }
      }, this);

      L.featureGroup(this.markers).addTo(this.map);
    });

  }


  CityMap(city): void {

    // Setting location to Boulder
    this.city = city;
    this.CityClickService.setCity(city)
    this.yelpService.getBusiness(this.city);
    this.getCoordinate(this.city);

    this.markers = [];
    if(this.map) {
      this.map.remove();
    }

    this.map = L.map('map').locate({setView: true, maxZoom:8});
    console.log( ' latitude ', this.coordinates['lat']);
    console.log( ' long ', this.coordinates['long']);
    var latLon = L.latLng(this.coordinates['lat'], this.coordinates['long']);
    var bounds = latLon.toBounds(5000); // 10000 = metres
    this.map.panTo(latLon).fitBounds(bounds);


    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(this.map)





    this.yelpService.getNightlife(this.getCity())
    .subscribe(nightlife => {
      nightlife.forEach(function(x) {

        var am = new this.LocationMarker2([x.latitude, x.longitude], {title: x.name});
        if(x.latitude != null && x.longitude != null){

          am.setLocation(x);

          am.on('click', function() {
            this.infoPanelService.add(am.getLocation());
            this.infoPanelService.showPanel();
          }, this);



          this.markers.push(am);
        }
      }, this);

      L.featureGroup(this.markers).addTo(this.map);
    });

  }

  ngOnInit() {
    // this.getCity();
    this.initMap();
    this.yelpService.getBusiness(this.city);
    this.yelpService.businessSource.subscribe(this.businessObserver)
      this.yelpService.nightlifeSource.subscribe(this.nightlifeObserver)
    this.getNightlife(this.city);

  }
}
