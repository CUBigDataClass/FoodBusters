'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const client = yelp.client('EzAjSA7b8ecNs1WVtPdlx9N369MlNfD1WXqS2vlvXoY8eOu_YzS7GJhYTWDusfU9b-DexQCHRgcrCF2lVkr_AEqaS9jYistvozIVBP4zrlb2Kf_na45Lhj70p7JlXnYx');


//connect to MongoDB
require('./models/models');
var mongoose = require('mongoose');
//yelp as collection name
mongoose.connect('mongodb://localhost/yelp')

var Business = mongoose.model('Business');



client.search({
    term: 'food',
    location: 'Montreal',
  }).then(function(data) {

    //console.log(data);
    //convert data to Json string
    var jsonString = JSON.stringify(data);
    var jsonBussObj = JSON.parse(jsonString);
    // console.log(jsonBussObj);
  
    var l = jsonBussObj.length;

    for(var i = 0; i<l;i++){
        var bussiObj = jsonBussObj[i];
        var newBusiness = new Business();

        newBusiness.is_claimed  = bussiObj.is_claimed;
        newBusiness.rating  = bussiObj.rating;
        newBusiness.mobile_url = bussiObj.mobile_url;
        newBusiness.rating_img_url = bussiObj.rating_img_url;
        newBusiness.review_count = bussiObj.review_count;
        newBusiness.name = bussiObj.bussiObj;
        newBusiness.rating_img_url_small = bussiObj.rating_img_url_small;
        newBusiness.url = bussiObj.url;
        newBusiness.categories = bussiObj.categories;
        newBusiness.phone = bussiObj.phone;
        newBusiness.snippet_text = bussiObj.snippet_text;
        newBusiness.image_url = bussiObj.image_url;
        newBusiness.snippet_image_url = bussiObj.snippet_image_url;
        newBusiness.display_phone = bussiObj.display_phone;
        newBusiness.rating_img_url_large = bussiObj.rating_img_url_large;
        newBusiness.id = bussiObj.id;
        newBusiness.is_closed = bussiObj.is_closed;
        newBusiness.location = bussiObj.location;

        // save the user
        newBusiness.save(function(err) {
            if (err){
                console.log('Error in Saving user: '+err);  
                throw err;  
            }
        });
    }
    console.log('Done saving to database.');

})
.catch(function (err){
    console.error(err);
});

 


app.listen(3000, () => console.log('server started'));

