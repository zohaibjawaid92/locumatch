'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FarmSchema = new Schema({
  userId : Object,
  title: String,
  area: String,
  address: String,
  latitude: Number,
  longtitude : Number,
 
});

module.exports = mongoose.model('Farm', FarmSchema);
