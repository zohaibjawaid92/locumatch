'use strict';

var _ = require('lodash');
var Hospital = require('./hospital.model');
var Doctor = require('../doctors/doctors.model');
var AddFavourite = require('./models/AddFavourite.model');
var AddContract = require('./models/AddContract.model');

// Get list of dashboards
exports.index = function(req, res) {
  Dashboard.find(function (err, dashboards) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(dashboards);
  });
};


exports.getallcontract = function(req , res){
  AddContract.find({hospitalId : req.params.id}, function(err , result){
    if(err) { return handleError(res , err); }
    if(!result) { return res.status(404).send('Not Found'); }
    res.json(result);
  })
}


// Get Hospital Profile
exports.getHospitalProfileRecord = function(req, res) {
  Hospital.find({email : req.body.email}, function(err , result){
    if(err) { return handleError(res , err); }
    if(!result) { return res.status(404).send('Not Found'); }
    res.json(result);
  })
};

//Allergy_and_Immunology

// Get a single dashboard
exports.show = function(req, res , next) {
  console.log(req.body);
  Doctor.find({'speciality' : req.body.speciality,'state' : req.body.state} , function(err, opportunities) {
    // console.log(opportunities);
    if(err) { return handleError(res, err); }
    if(!opportunities) { return res.status(404).send('Not Found'); }
    res.json(opportunities);
  });
};

exports.doctorprofile = function(req , res , next) {
  console.log(req.params);
  Doctor.findById(req.params.id , function(err , result){
    if(err) { return handleError(res , err); }
    if(!result) { return res.status(404).send('Not Found'); }
    res.json(result);
  })
}

// Add Favourite
exports.favourite = function(req, res) {
  console.log('recieve from hospital' , req.body);
  AddFavourite.create(req.body, function(err, hospital) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(hospital);
  });
};

//Add Contract
exports.addcontract = function(req, res) {
  console.log('recieve from hospital' , req.body);
  AddContract.create(req.body, function(err, hospital) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(hospital);
  });
};


// Creates a new dashboard in the DB.
exports.create = function(req, res) {
  console.log('recieve from hospital' , req.body);
  Hospital.create(req.body, function(err, hospital) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(hospital);
  });
};

// Updates an existing dashboard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  hospitalProfile.findById(req.params.id, function (err, dashboard) {
    if (err) { return handleError(res, err); }
    if(!dashboard) { return res.status(404).send('Not Found'); }
    var updated = _.extend(dashboard, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(dashboard);
    });
  });
};

// Deletes a dashboard from the DB.
exports.destroy = function(req, res) {
  hospitalProfile.findById(req.params.id, function (err, dashboard) {
    if(err) { return handleError(res, err); }
    if(!dashboard) { return res.status(404).send('Not Found'); }
    dashboard.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}