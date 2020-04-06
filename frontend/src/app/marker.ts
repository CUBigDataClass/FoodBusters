import * as L from 'leaflet';
import { Business } from './businessModel';


var restIcon = L.icon({
    iconUrl: '../assets/img/Minilogo.png',

    iconSize: [20,20]
});

RestMarker = L.Marker.extend({

    options: {
        icon: this.restIcon
    },

    business: {},

    setRest: function(business: Business) {
        this.business = business;
    },

    getSearchBusiness: function(): Business{
        return this.business;
    }

  });

export function restMarker(latlng: L.latLng, business: Business, options) {
    var am = new RestMarker(latlng, options);
    am.setRest(business)
    return am;
}

