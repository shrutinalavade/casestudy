require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Importing routes
const servicePlanRoutes = require('./routes/serviceplanRoutes');
const washerRoutes = require('./routes/washerRoutes');
const addonRoutes = require('./routes/addonRoutes');
const carRoutes = require('./routes/carRoutes');
const customerRoutes = require('./routes/customerRoute');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

//connect to database
const dbURI ="mongodb+srv://shrutii:shruti123@cluster0.hilm7.mongodb.net/adminn?retryWrites=true&w=majority";
mongoose.connect( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false},()=>{console.log("connected to database");});

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/', [authRoutes,servicePlanRoutes,addonRoutes,carRoutes,washerRoutes, customerRoutes, orderRoutes]);


//Listen to port : default is 2000
const port = process.env.PORT || 2000;
app.listen(port,function(){
    console.log("Listening to port:",port);
})


module.exports = app;