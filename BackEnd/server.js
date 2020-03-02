require('dotenv').config();

const express = require('express');
const app = express();


//create to mongodb database
const mongoose = require('mongoose'); 
mongoose.connect(process.env.DATABASE_URL, {userNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

//setup server
// app.use(express.json()) //let server accept the body of json


const restaurantRouter = require('./routes/restaurants');
app.use('/restaurants', restaurantRouter);

// //connect to MongoDB
// const business = require('./models/models');
// app.use('/models', business);

//run on localhost port 3000
app.listen(3000, () => console.log("server started"))




