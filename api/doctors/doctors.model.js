'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DashboardSchema = new Schema({

  state: String,
  city: String,
  Region: String,
  Zip: Number, 
  profileImage: String,
  licenseType : String,
  Speciality: String, 
  yearsOfExperience: Number ,
  medSchoolName: String,
  Date: String ,
  Fellowship: String ,
  doctorDetails: String,
  npiNumber: String,
  license: String,
  accolades: String,
  languages: String,
  hospitalAffilations: String
});

module.exports = mongoose.model('Doctors', DashboardSchema);
