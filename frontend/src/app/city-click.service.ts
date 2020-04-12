import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityClickService {

  city: String;
  city_coordinates = [];
  
  constructor() {
    this.city = 'denver';
    this.city_coordinates = [{'boulder': {'lat' :40.014984, 'long':-105.270546}},
                              {'denver': {'lat' :39.742043 ,'long':-104.991531}},
                              {'new_york': {'lat' :40.730610 ,'long':-73.935242}}
                            ];
   }

  setCity(city) {
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
        console.log('coor in service', coor['new_york']);
    
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
    return coor[city];
    
    // for (var i=0; i<len; i++) {
    //   for(var j=0; j<3; i++)
    //   {
    //     var coor = this.city_coordinates[i][j];
    //     console.log('coor in service', coor);
    //   }
      
      // return coor;
    // }
    

  }


}
