import { Injectable } from '@angular/core';
import { Business } from '../businessModel';

@Injectable({
  providedIn: 'root'
})
export class CityClickService {

  city: String;
  city_coordinates = [];
  business: Business[] = [];
  nightLife: Nightlife[];

  constructor() {
    // this.city = 'boulder';
    this.city_coordinates = [{'boulder': {'lat' :40.016984, 'long':-105.270546}},
                              {'denver': {'lat' :39.742043 ,'long':-104.991531}},
                              {'new_york': {'lat' :40.7128 ,'long':-74.0060}},
                              {'los_angeles': {'lat' :34.052235 ,'long':-118.243683}},
                              {'seattle': {'lat' :47.6062 ,'long':-122.3321}}
                            ];
   }

  setCity(city):void{
     this.city = city;
  }

  getCity() {
    return this.city;
  }

  getCity_Coordinates(city){
    var coor: object;
    if( city == 'boulder')
    {
        coor = this.city_coordinates[0];
        console.log('coor in service', coor['boulder']);

    }
    if( city == 'denver')
    {
        coor = this.city_coordinates[1];
        console.log('coor in service', coor['denver']);

    }
    if( city == 'new_york')
    {
        coor = this.city_coordinates[2];
        console.log('coor in service', coor['new_york']);

    }
    if( city == 'los_angeles')
    {
        coor = this.city_coordinates[3];
        console.log('coor in service', coor['los_angeles']);

    }
    if( city == 'seattle')
    {
        coor = this.city_coordinates[4];
        console.log('coor in service', coor['seattle']);

    }
    return coor[city];
  }

  add(business:any): void{
    this.business = business;
    console.log( "city click add busisness ", this.business);
  }

  getBusinessService(){
    console.log( " get business city click ", this.business);
    return this.business;

  }

  addNightlife(nightLife:any): void{
    this.nightLife = nightLife;
    console.log( "city click add night life ", this.nightLife);
  }

  getNightLifeService(){
    console.log( " get night life city click ", this.nightLife);
    return this.nightLife;

  }

  // getNightLifeService(){
  //   console.log( " get night life city click ", this.nightLife);
  //   return this.nightLife;
  //
  // }


}
