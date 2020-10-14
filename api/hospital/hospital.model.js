'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Hospital = new Schema({
  email : String,
  role: String,
  bedCount: String,
  city: String,
  facilitySize: String,
  hospitalDetails : String, 
  profileImage: String,
  region : String,
  state: String, 
  zip: String ,
});

module.exports = mongoose.model('Hospital', Hospital);
