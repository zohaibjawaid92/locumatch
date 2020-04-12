'use strict';

var _ = require('lodash');
var Farm = require('./farms.module');

// Get list of dashboards
exports.index = function(req, res) {
    Farm.find(function (err, farms) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(farms);
  });
};

// Get a single dashboard
exports.show = function(req, res) {
    Farm.find({userId : req.params.id}, function (err, farm) {
    if(err) { return handleError(res, err); }
    if(!farm) { return res.status(404).send('Not Found'); }
    return res.json(farm);
  });
};


exports.details = function(req, res) {
  Farm.find({_id : req.params.id}, function (err, farm) {
  if(err) { return handleError(res, err); }
  if(!farm) { return res.status(404).send('Not Found'); }
  return res.json(farm);
});
};


// Creates a new dashboard in the DB.
exports.create = function(req, res) {
    Farm.create(req.body, function(err, farm) {
    if(err) { return handleError(res, err); }
    return res.status(201).json({
        farm : farm,
        message : 'Farm Successfully added'
    });
  });
};

// Updates an existing dashboard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Farm.findById(req.params.id, function (err, farm) {
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
    Farm.findById(req.params.id, function (err, farm) {
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