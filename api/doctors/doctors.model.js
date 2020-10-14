'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Doctor = new Schema({
  fname : String,
  lname : String,
  email : String,
  role : String,
  state : String,
  city: String,
  Region: String,
  zip: String, 
  profileImage: String,
  licenseType : String,
  speciality: String, 
  yearsOfExperience: String ,
  medSchoolName: String,
  date: String ,
  fellowship: String ,
  doctorDetails: String,
  npiNumber: String,
  license: String,
  accolades: String,
  languages: String,
  hospitalAffilations: String
});

module.exports = mongoose.model('Doctor', Doctor);
