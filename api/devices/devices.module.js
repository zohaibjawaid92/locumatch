'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var deviceSchema = new Schema({
    cropId : Object,
    device_macaddress : {},
    farmSlaves : {},
    masterSlaves : {},
});

module.exports = mongoose.model('Devices', deviceSchema);
