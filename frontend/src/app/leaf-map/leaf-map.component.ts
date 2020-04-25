import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { YelpService } from '../service/yelp.service';
import { Business } from '../businessModel';
import { Nightlife } from '../nightlifeModel';

import { CityClickService } from '../service/city-click.service';
import { InfoPanelService } from '../service/info-panel.service';
import { NightLifeServiceService } from '../service/night-life-service.service';




@Component({
  selector: 'app-leaf-map',
  templateUrl: './leaf-map.component.html',
  styleUrls: ['./leaf-map.component.scss']
})

export class LeafMapComponent implements OnInit {

  //create object for business
  business: Business[];
  nightlife: Nightlife[];
  private map: L.Map;
  markers: L.Marker[];
  city:String;
  coordinates: object;
  // option: Boolean;
  _subscription: any;
  isNightlife: Boolean;

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

  });

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

  constructor(public infoPanelService: InfoPanelService, public yelpService : YelpService, 
    public CityClickService : CityClickService, private nightlifeService: NightLifeServiceService)
  {
    this._subscription = nightlifeService.isNightlifeChange.subscribe((value) => { 
      this.isNightlife = value; 
      this.getSelectOption();
    });
    this.business = [];
    this.nightlife = [];
    this.city = 'boulder';
  }


  getCoordinate(city){
    this.coordinates = this.CityClickService.getCity_Coordinates(city);
    return this.coordinates;

  }

  Updatebusiness(x) {
    this.business = x;
    console.log('update business: ', this.business);
    this.CityClickService.setCity(this.city);
    this.markers = [];
   
    this.business.forEach(function(a) {
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
    console.log('update nightlife: ', this.nightlife);
    this.CityClickService.setCity(this.city);
    this.markers = [];

    this.nightlife.forEach(function(a) {
      var am = new this.LocationMarker2([a.latitude, a.longitude], {title: a.name});
      if(a.latitude != null && a.longitude != null){
        am.setLocation(a);
        am.on('click', function() {
          // console.log('click ', am.getLocation())
          this.infoPanelService.addNight(am.getLocation());
          this.infoPanelService.showPanel();
        }, this);
   
        this.markers.push(am);
      }
    }, this);
  

    if(this.markers.length !=0) {
      
      L.featureGroup(this.markers).addTo(this.map);
      this.CityClickService.addNight(this.nightlife);
    } else {
      console.log('no markers');
    }

  }
    


  getSelectOption(): void{
    if(!this.isNightlife){
      // this.initMap();
      this.CityMap(this.city)
      this.yelpService.getBusiness(this.city);
      this.yelpService.businessSource.subscribe(this.businessObserver);
      this.CityClickService.getRestaurantOnMap();
      console.log('select option on business');
    }else  {
     
      // this.initMap();
      this.CityMap(this.city)
      this.yelpService.getNightlife(this.city);
      this.yelpService.nightlifeSource.subscribe(this.nightlifeObserver);
      this.CityClickService.getNightlifeOnMap();
      console.log('select option on night life');
    }
  }


  CityMap(city): void {

    // Setting location to Boulder
    this.city = city;
    this.CityClickService.setCity(city)
    if(!this.isNightlife) {
      this.yelpService.getBusiness(this.city);
    } else{
      this.yelpService.getNightlife(this.city);
    }
   
    
    this.getCoordinate(this.city);

    this.markers = [];
    if(this.map) {
      this.map.remove();
    }

    this.map = L.map('map').locate({setView: true, maxZoom:8});
    // console.log( ' latitude ', this.coordinates['lat']);
    // console.log( ' long ', this.coordinates['long']);
    var latLon = L.latLng(this.coordinates['lat'], this.coordinates['long']);
    var bounds = latLon.toBounds(5000); // 10000 = metres
    this.map.panTo(latLon).fitBounds(bounds);


    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(this.map)

  }

  ngOnInit() {
    this.getSelectOption();
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._subscription.unsubscribe();
   }
}
