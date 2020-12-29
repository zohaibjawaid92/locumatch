'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var account_settings = new Schema({
    userId : Object,
    acc_type : String,
    acc_no : String,
    routing_no : String,
});

module.exports = mongoose.model('account_settings', account_settings);
