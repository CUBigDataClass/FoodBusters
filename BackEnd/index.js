'use strict';


const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//create to mongodb database
const mongoose = require('mongoose'); 

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/yelpApiDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(cors());

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json())

const restaurantRouter = require('./routes/routes');
app.use('/', restaurantRouter);




//run on localhost port 3000
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

//how to run > npm run devStart


