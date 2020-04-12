'use strict';

var _ = require('lodash');
var Crops = require('./crops.module');

// Get list of dashboards
exports.index = function(req, res) {
    Crops.find(function (err, farms) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(farms);
  });
};

// Get a info of crops accordingly farmId
exports.show = function(req, res) {
    Crops.find({farmId : req.params.id}, function (err, crops) {
    if(err) { return handleError(res, err); }
    if(!crops) { return res.status(404).send('Not Found'); }
    return res.json(crops);
  });
};


// getting crop details.
exports.details = function(req, res) {
  Crops.find({_id : req.params.id}, function (err, crops) {
  if(err) { return handleError(res, err); }
  if(!crops) { return res.status(404).send('Not Found'); }
  return res.json(crops);
});
};


// Creates a new dashboard in the DB.
exports.create = function(req, res) {
    Crops.create(req.body, function(err, farm) {
    if(err) { return handleError(res, err); }
    return res.status(201).json({
        farm : farm,
        message : 'Crops Successfully added'
    });
  });
};

// Updates an existing dashboard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Crops.findById(req.params.id, function (err, farm) {
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
    console.log(req.params.id);
    Crops.findById(req.params.id, function (err, farm) {
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