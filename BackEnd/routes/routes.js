const express = require('express')
const router = express.Router()
const yelp = require('yelp-fusion');


const client = yelp.client('EzAjSA7b8ecNs1WVtPdlx9N369MlNfD1WXqS2vlvXoY8eOu_YzS7GJhYTWDusfU9b-DexQCHRgcrCF2lVkr_AEqaS9jYistvozIVBP4zrlb2Kf_na45Lhj70p7JlXnYx');


const Business = require('../models/models')

var mongoose = require('mongoose');


// create the search requrest from yelp
const searchRequest = {
    term:'restaurants',
    location: 'boulder, co'
  };

client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(firstResult);
    var jsonBussObj = JSON.parse(prettyJson)

    router.get('/business', async (req, res) => {
        try {
            res.json(jsonBussObj)
        } catch (err) {
            res.status(500).json({ message: err.message})
        }
    });

    var l = jsonBussObj.length;
    console.log("length", l);
  

    for(var i = 0; i<l;i++){
        var business = new Business();
        business.id = jsonBussObj[i].id,
        business.alias = jsonBussObj[i].alias,
        business.name = jsonBussObj[i].name,
        business.image_url = jsonBussObj[i].image_url,
        business.is_closed = jsonBussObj[i].is_closed,
        business.url = jsonBussObj[i].url,
        business.review_count = jsonBussObj[i].review_count,
        business.categories = jsonBussObj[i].categories,
        business.rating = jsonBussObj[i].rating,
        business.coordinates = jsonBussObj[i].coordinates,
        business.transactions = jsonBussObj[i].transactions,
        business.price = jsonBussObj[i].price,
        business.location = jsonBussObj[i].location,
        business.phone = jsonBussObj[i].phone,
        business.display_phone = jsonBussObj[i].display_phone,
        business.distance = jsonBussObj[i].distance,
        
   
        // save the user
        business.save(function(err) {
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




// get all business in  boulder from database
router.get('/business/boulder', async (req, res) => {
    try {
        const business = await Business.find();
        res.json(business)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
});

module.exports = router

