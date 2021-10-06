const mongoose = require('mongoose');

//Connect to admin db to read data
const admin="mongodb+srv://customer:shruti123@cluster0.hilm7.mongodb.net/adminn?retryWrites=true&w=majority";
const conn = mongoose.createConnection( admin,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

//Connect to washers db to read details : to find nearby washers
const washer="mongodb+srv://customer:shruti123@cluster0.hilm7.mongodb.net/washer?retryWrites=true&w=majority";
const washerconn = mongoose.createConnection( washer,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


//from admin db
const car = conn.model('car', new mongoose.Schema({}));
const addon = conn.model('addon',new mongoose.Schema({}));
const servicePlan = conn.model('servicePlan',new mongoose.Schema({}));

//from washer details collection
const washerDetails = washerconn.model('washerdetail',new mongoose.Schema({}))

module.exports = { car,addon,servicePlan, washerDetails};