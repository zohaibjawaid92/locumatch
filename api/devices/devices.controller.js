'use strict';

var _ = require('lodash');
var Devices = require('./devices.module');
var mqttSubscriber = require('../../mqtt/subscriber');

// Get list of dashboards
exports.index = function(req, res) {
    Devices.find(function (err, farms) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(farms);
  });
};

// Get a single dashboard
exports.show = function(req, res) {
    Devices.find({cropId : req.params.id}, function (err, device) {
    if(err) { return handleError(res, err); }
    if(!device) { return res.status(404).send('Not Found'); }
    return res.json(device);
  });
};


// Creates a new dashboard in the DB.
exports.create = function(req, res) {
    Devices.create(req.body, function(err, farm) {
    if(err) { return handleError(res, err); }
    return res.status(201).json({
        farm : farm,
        message : 'Slave Added Successfully!!'
    });
  });
};

// Updates an existing dashboard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Devices.findById(req.params.id, function (err, farm) {
    if (err) { return handleError(res, err); }
    if(!farm) { return res.status(404).send('Not Found'); }
    var updated = _.extend(farm, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(farm);
    });
  });
};

// Deletes a dashboard from the DB.
exports.destroy = function(req, res) {
    Devices.findById(req.params.id, function (err, farm) {
    if(err) { return handleError(res, err); }
    if(!farm) { return res.status(404).send('Not Found'); }
    farm.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}