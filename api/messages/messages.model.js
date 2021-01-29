'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Messages = new Schema({
    sendTo : String,
    FromTo : String,
    userProfile : {},
    message : [{
        contactId : String,
        text : String,
    }],
});

module.exports = mongoose.model('Messages', Messages);
