'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddFavourite = new Schema({
  hospitalId : String,
  doctorProfile : String
});

module.exports = mongoose.model('AddFavourite', AddFavourite);
