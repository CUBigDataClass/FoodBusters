import * as L from 'leaflet';
import { Business } from './businessModel';

var appleIcon = L.icon({
    iconUrl: '../assets/img/icon.png',

    iconSize: [20,20]
});

var LocationMarker = L.Marker.extend({

    options: {
        icon: appleIcon
    },

    business: {},

    setLocation: function(business: Business) {
        this.business = business;
    },

    getLocation: function(): Business{
        return this.business;
    }

});

export function locationMarker(latlng: L.latLng, business: Business, options) {
    var am = new LocationMarker(latlng, options);
    am.setLocation(business);

    return am;
}