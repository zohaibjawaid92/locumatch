'use strict';

var _ = require('lodash');
var Doctors = require('../doctors/doctors.model');
var Hospital = require('../hospital/hospital.model');
var AddContract = require('../hospital/models/AddContract.model');

// Get list of Doctors
exports.index = function(req, res) {
    Doctors.find(function (err, doctors) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(doctors);
  });
};

// Get list of Hospitals
exports.hospitals = function(req, res) {
    Hospital.find(function (err, hosp) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(hosp);
  });
};

// Get list of Contracts
exports.contracts = function(req, res) {
    AddContract.find(function (err, hosp) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(hosp);
  });
};





// // Get a single dashboard
// exports.show = function(req, res) {
//   Dashboard.findById(req.params.id, function (err, dashboard) {
//     if(err) { return handleError(res, err); }
//     if(!dashboard) { return res.status(404).send('Not Found'); }
//     return res.json(dashboard);
//   });
// };

// // Creates a new dashboard in the DB.
// exports.create = function(req, res) {
//   Dashboard.create(req.body, function(err, dashboard) {
//     if(err) { return handleError(res, err); }
//     return res.status(201).json(dashboard);
//   });
// };

// // Updates an existing dashboard in the DB.
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