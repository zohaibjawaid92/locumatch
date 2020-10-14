'use strict';

var _ = require('lodash');
var Hospital = require('./hospital.model');
var Doctor = require('../doctors/doctors.model');

// Get list of dashboards
exports.index = function(req, res) {
  Dashboard.find(function (err, dashboards) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(dashboards);
  });
};

// Get a single dashboard
exports.show = function(req, res , next) {
  console.log(req.body);
  Doctor.findOne({'speciality' : req.body.speciality}, {'state' : req.body.state} , function(err, opportunities) {
    console.log(opportunities);
    if(err) { return handleError(res, err); }
    if(!opportunities) { return res.status(404).send('Not Found'); }
    return res.send(opportunities);
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