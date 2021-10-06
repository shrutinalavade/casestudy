const { addon, promocode, servicePlan } = require('../models/readonlydata');
const axios = require('axios');

module.exports.get_ui_services = function(req,res){
    servicePlan.find({status: 'active'},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
    
};

module.exports.get_services = function(req,res){
    servicePlan.find({status: 'active'},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
    
};

module.exports.get_addons = function(req,res){
    const service  = req.params.service;
    addon.find({$and:[{forServices:service},{status:'active'}]},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).json(docs);
        }
    })
};

