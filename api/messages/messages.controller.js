'use strict';

var _ = require('lodash');
var Messages = require('./messages.model');

// Get list of dashboards
exports.index = function(req, res) {
    Messages.find(function (err, farms) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(farms);
  });
};

// Get a single dashboard
exports.show = function(req, res) {
    Messages.find({FromTo : req.params.id}, function (err, messages) {
    if(err) { return handleError(res, err); }
    if(!messages) { return res.status(404).send('Not Found'); }
    return res.json(messages);
  });
};


// Messages store in DB
exports.create = function(req, res) {
    Messages.create(req.body, function(err, results) {
    if(err) { return handleError(res, err); }
    return res.status(201).json({
        results : results,
        message : 'Account Details Added Successsfully!'
    });
  });
};

// Updates an existing dashboard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Messages.findById(req.params.id, function (err, farm) {
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
    Messages.findById(req.params.id, function (err, farm) {
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