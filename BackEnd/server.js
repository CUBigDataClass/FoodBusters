'use strict';
require('dotenv').config();

const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());

//create to mongodb database
const mongoose = require('mongoose'); 
mongoose.connect(process.env.DATABASE_URL, {userNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json())

const restaurantRouter = require('./routes/routes');
app.use('/', restaurantRouter);



//run on localhost port 3000
app.listen(3000, () => console.log("server started"))




