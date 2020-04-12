'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CropsSchema = new Schema({
    farmId : Object,
    area : String,
    Seed_type : String,
    expected_yield : String,
    fertilizer_type : String,
    expected_harvest_time : String,
    pesticide_type : String,
    last_yield : String,
    brand : String,
    crop_type : String,
    Schedule : {
        from_time : Date,
        to_time : Date,
    },
    number_of_seeds : String,
    cycle : String,
    seeds_source : String,
    Water_resource : {},
    Irrigation : {},
    capacity_gallon : String,
});

module.exports = mongoose.model('Crops', CropsSchema);
