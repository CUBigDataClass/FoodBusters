'use strict';


const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//create to mongodb database
// const mongoose = require('mongoose'); 

// mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://3.86.151.156/yelpApiDb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// mongoose.connect('mongodb://mongo:27017/yelpAPi')

app.use(bodyParser.json());
app.use(cors());

// const db = mongoose.connection;

// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database'));


app.use(express.json())

const restaurantRouter = require('./routes/routes');
app.use('/', restaurantRouter);




//run on 3.86.151.156 port 3000
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

//how to run > npm start


