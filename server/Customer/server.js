const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//routes
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const carRoutes = require('./routes/carRoutes');
const profileRoutes= require('./routes/profileRoutes');
const myordersRoutes = require('./routes/myordersRoutes');
const scheduledLater = require('./routes/scheduledLater');
const washerRoute = require('./routes/findWashers');
const serviceAddon = require('./routes/service_addon');

const app = express();


//Connect to Customers Database
const dbURI="mongodb+srv://customer:shruti123@cluster0.hilm7.mongodb.net/customer?retryWrites=true&w=majority";
mongoose.connect( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false},()=>{console.log("connected to database");});


//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/',[authRoutes,profileRoutes,orderRoutes,carRoutes,serviceAddon,myordersRoutes,scheduledLater, washerRoute]);



//Listen to port: Default is 3000
const port = process.env.PORT || 3000;
app.listen( port , function(){
    console.log("listening to port ",port);
});


module.exports = app;
