'use strict';

var _ = require('lodash');
var Doctor = require('./doctors.model');
var DoctorContracts = require('./models/doctorsContract.model');
var AddContract = require('../hospital/models/AddContract.model');
var account_settings = require('../account_settings/account_settings.module');
// Get list of dashboards
exports.index = function(req, res) {
  Dashboard.find(function (err, dashboards) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(dashboards);
  });
};

// Get a single dashboard
// exports.show = function(req, res) {
//   Dashboard.findById(req.params.id, function (err, dashboard) {
//     if(err) { return handleError(res, err); }
//     if(!dashboard) { return res.status(404).send('Not Found'); }
//     return res.json(dashboard);
//   });
// };


exports.checkdoctoraccdetails = function(req , res , next) {
  console.log(req.params.id);
  account_settings.find({userId : req.params.id}, function(err , result){
    if(err) { return handleError(res , err); }
    if(!result) { return res.status(404).send('Not Found'); }
    res.json(result);
  })
}

// Get Doctor Profile
exports.getDoctorProfileRecord = function(req, res) {
  Doctor.find({email : req.body.email}, function(err , result){
    if(err) { return handleError(res , err); }
    if(!result) { return res.status(404).send('Not Found'); }
    res.json(result);
  })
};

// By user
exports.getapprovedcontractsbydoctor = function(req, res) {
  console.log(req.params.id);
  DoctorContracts.find({userId : req.params.id}, function(err , result){
    if(err) { return handleError(res , err); }
    if(!result) { return res.status(404).send('Not Found'); }
    res.json(result);
  })
};


// By hospital
exports.getallcontracts = function(req, res) {
  console.log(req.params.id);
  DoctorContracts.find({hospitalId : req.params.id}, function(err , result){
    if(err) { return handleError(res , err); }
    if(!result) { return res.status(404).send('Not Found'); }
    res.json(result);
  })
};


// Create Doctor Contract
exports.createdoctorcontract = function(req, res) {
  console.log(req.body);
  DoctorContracts.create(req.body, function(err, doctrosData) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(doctrosData);
  });
};

// Creates a new dashboard in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  Doctor.create(req.body, function(err, doctrosData) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(doctrosData);
  });
};

exports.hospitalopportunities = function(req,res){
  AddContract.find({'speciality' : req.body.speciality} , function(err, opportunities) {
    if(err) { return handleError(res, err); }
    if(!opportunities) { return res.status(404).send('Not Found'); }
    res.json(opportunities);
  });
}

// Updates an existing dashboard in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Dashboard.findById(req.params.id, function (err, dashboard) {
//     if (err) { return handleError(res, err); }
//     if(!dashboard) { return res.status(404).send('Not Found'); }
//     var updated = _.extend(dashboard, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.status(200).json(dashboard);
//     });
//   });
// };

// Deletes a dashboard from the DB.
// exports.destroy = function(req, res) {
//   Dashboard.findById(req.params.id, function (err, dashboard) {
//     if(err) { return handleError(res, err); }
//     if(!dashboard) { return res.status(404).send('Not Found'); }
//     dashboard.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.status(204).send('No Content');
//     });
//   });
// };

function handleError(res, err) {
  return res.status(500).send(err);
}