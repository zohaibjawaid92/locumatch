'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DoctorContracts = new Schema({
    userId : String,
    fname : String,
    lname : String,
    hospitalId : String,
    contractno : String,
    contractdescription : String,
    startdate : String,
    enddate : String,
    speciality : String,
    region : String,
    status : String,
    payfrom : String,
    payto : String,
});

module.exports = mongoose.model('DoctorContracts', DoctorContracts);
