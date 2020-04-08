import * as L from 'leaflet';
import { Business } from './businessModel';


var restIcon = L.icon({
    iconUrl: '../assets/img/Minilogo.png',

    iconSize: [35,35]
});

var RestMarker = L.Marker.extend({

    options: {
        icon: restIcon
    },

    business: {},

    setLocation: function(business: Business) {
        this.business = business;
    },

    getSearchBusiness: function(): Business{
        return this.business;
    }

  });

export function restMarker(latlng: L.latLng, business: Business, options) {

    var am = new RestMarker(latlng, options);
    am.setLocation(business);

    return am;
}

