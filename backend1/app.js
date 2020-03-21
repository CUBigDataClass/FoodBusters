'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const client = yelp.client('EzAjSA7b8ecNs1WVtPdlx9N369MlNfD1WXqS2vlvXoY8eOu_YzS7GJhYTWDusfU9b-DexQCHRgcrCF2lVkr_AEqaS9jYistvozIVBP4zrlb2Kf_na45Lhj70p7JlXnYx');

app.use(bodyParser.json());
app.use(cors());
//connect to MongoDB
require('./models/models');
var mongoose = require('mongoose');
//yelp as collection name
mongoose.connect('mongodb://localhost/yelpAPi')

var Business = mongoose.model('Business');


const searchRequest = {
    term:'Four Barrel Coffee',
    location: 'san francisco, ca'
  };

client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(firstResult, null, 4);
    var jsonBussObj = JSON.parse(prettyJson)

    app.get('/business', async (req, res) => {
        try {
            // const model = await Model.find()
            res.json(jsonBussObj)
        } catch (err) {
            res.status(500).json({ message: err.message})
        }

    });

    // console.log(jsonBussObj[1].review_count);
    // console.log(typeof(prettyJson));

    var l = jsonBussObj.length;
    console.log("length", l);
    for(var i = 0; i<l;i++){
        var bussiObj = jsonBussObj[i];
        console.log(bussiObj.rating);
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
        newBusiness.display_phone = bussiObj.display_phone;
        newBusiness.rating_img_url_large = bussiObj.rating_img_url_large;
        newBusiness.id = bussiObj.id;
        newBusiness.is_closed = bussiObj.is_closed;
        newBusiness.location = bussiObj.location;
        newBusiness.transactions = bussiObj.transactions;
        newBusiness.distance = bussiObj.distance;
        newBusiness.coordinates = bussiObj.coordinates;
        newBusiness.title = bussiObj.title;
        
        // save the user
        newBusiness.save(function(err) {
            if (err){
                console.log('Error in Saving user: '+err);  
                throw err;  
            }
        });
    }
    console.log('Done saving to database.');

  }).catch(e => {
    console.log(e);
  });




app.listen(3000, () => console.log('server started'));

