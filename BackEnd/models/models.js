var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Defining a schema for Business
var businessSchema = new mongoose.Schema({
    id: String,
    alias: String,
    name: String,
    image_url: String,
    is_closed: Boolean,
    url: String,
    review_count: Number,
    categories: {
        alias: String,
        title: String,
    },
    rating : Number,
    coordinates: {
        latitude: Number,
        longitude:Number,
    },
    transactions: Object,
    price: String,
    location:{
        address1: String,
        address2: String,
        address3: String,
        city: String,
        zip_code: String,
        country: String,
        state: String,
        display_address: Object,
    },
    phone: String,
    display_phone: String,
    distance: Number
});

module.exports = mongoose.model('Business', businessSchema);