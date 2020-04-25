const express = require('../node_modules/express')
const router = express.Router()
const yelp = require('../node_modules/yelp-fusion/lib');


const client = yelp.client('EzAjSA7b8ecNs1WVtPdlx9N369MlNfD1WXqS2vlvXoY8eOu_YzS7GJhYTWDusfU9b-DexQCHRgcrCF2lVkr_AEqaS9jYistvozIVBP4zrlb2Kf_na45Lhj70p7JlXnYx');

const Business = require('../models/models')


// create the search requrest from yelp
const searchRequest = {
    term:'restaurants',
    location: 'boulder, co'
    };

const searchCity = {
    boulder : 'boulder, co',
    denver : 'denver, co',
    new_york : 'new york city, ny',
    los_angeles : 'los angeles, ca' ,
    boston : 'boston, ma',
    seattle : 'seattle, wa'
    };

// create object to store data from api for boulder
// var jsonBussObj = {};
// client.search(searchRequest).then(response => {
//     const firstResult = response.jsonBody.businesses;
//     const prettyJson = JSON.stringify(firstResult);
//     jsonBussObj = JSON.parse(prettyJson);

//     var l = jsonBussObj.length;

//     for(var i = 0; i<l;i++){
//         var business = new Business();
//         business.id = jsonBussObj[i].id,
//         business.alias = jsonBussObj[i].alias,
//         business.name = jsonBussObj[i].name,
//         business.image_url = jsonBussObj[i].image_url,
//         business.is_closed = jsonBussObj[i].is_closed,
//         business.url = jsonBussObj[i].url,
//         business.review_count = jsonBussObj[i].review_count,
//         business.categories = jsonBussObj[i].categories,
//         business.rating = jsonBussObj[i].rating,
//         business.coordinates = jsonBussObj[i].coordinates,
//         business.transactions = jsonBussObj[i].transactions,
//         business.price = jsonBussObj[i].price,
//         business.location = jsonBussObj[i].location,
//         business.phone = jsonBussObj[i].phone,
//         business.display_phone = jsonBussObj[i].display_phone,
//         business.distance = jsonBussObj[i].distance,

//         // save the user
//         business.save(function(err) {
//             if (err){
//                 console.log('Error in Saving user: '+err);
//                 throw err;
//             }
//         });

//     }

//     console.log('Done saving to database.');


//   }).catch(e => {
//     console.log(e);
//   });

  

// get data of each city
router.get('/business/:city', async (req, res) => {
    try{
        var city = req.params.city;
        const cityString = city.toString();
        const searchRequest = {
            term:'restaurants',
            location: searchCity[cityString],
            limit: 20
            };
        //get yelp api for each city
        client.search(searchRequest).then(response => {
            const firstResult = response.jsonBody.businesses;
            const prettyJson = JSON.stringify(firstResult);
            var businessDetail = JSON.parse(prettyJson);
            // console.log(businessDetail);
            var business = Business.find();
            console.log(firstResult)
            res.json(firstResult);
        }).catch(e => {
            console.log(e);
        });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }

});

// get data of each city for nightlife
router.get('/nightlife/:city', async (req, res) => {
    try{
        var city = req.params.city;
        const cityString = city.toString();
        const searchRequest = {
            categories: 'Nightlife',
            limit: 20,
            location: searchCity[cityString]
            };
        //get yelp api for each city
        client.eventSearch(searchRequest).then(response => {
            const firstResult = response.jsonBody.events;
            const prettyJson = JSON.stringify(firstResult);
            var nightlifeDetail = JSON.parse(prettyJson);
            console.log(nightlifeDetail)
            res.json(nightlifeDetail);
        }).catch(e => {
            console.log(e);
        });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }

});





//GET business Detail
router.get('/business/city/:id', async (req, res) => {
    try{
        var id = req.params.id;
        const idString = id.toString();
        // console.log("test id",idString);
        client.business(idString).then(response => {
            const firstResult = response.jsonBody;
            const prettyJson = JSON.stringify(firstResult);
            var businessDetail = JSON.parse(prettyJson);
            // console.log(businessDetail);
            res.json(businessDetail);
        }).catch(e => {
            console.log(e);
        });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }

});

router.get('/reviews/:id', async (req, res) => {
    try{
        // get id parameter from client, id is the unique id for each business
        var id = req.params.id;
     
        //Convert id into string
        const idString = id.toString();
        // pass idString into client review to get api from yelp for review detail of the business based on id
        client.reviews(idString).then(response => {
            // const firstResult = response.jsonBody.reviews[1].text;
            const firstResult = response.jsonBody.reviews;
            const prettyJson = JSON.stringify(firstResult);
            var reviewDetail = JSON.parse(prettyJson);
           
            // res.json is response to the client when the client request data
            res.json(reviewDetail);
        }).catch(e => {
            console.log(e);
        });
    } catch (err) {
        res.status(500).json({ message: err.message})
    }

});




module.exports = router
