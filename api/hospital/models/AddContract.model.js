'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddContract = new Schema({
    hospitalId : String,
    contractno : String,
    payfrom: String,
    payto: String,
    region: String,
    startdate: String,
    enddate: String,
    contractdescription: String,
    speciality: String,
});

module.exports = mongoose.model('AddContract', AddContract);
