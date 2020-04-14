/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Setting = require('../api/setting/setting.model');


User.find(function (err, data) {
  if(data.length < 1){
    User.create({
      provider: 'local',
      fname: 'Test ',
      lname : "User",
      email: 'doctor@doctor.com',
      password: 'doctor',
    },
    {
      provider: 'local',
      role: 'hospital',
      fname: 'Mahruf',
      lname : "Khan",
      email: 'hospital@locumatch.com',
      password: 'hospital',
    }, 
    {
      provider: 'local',
      role: 'admin',
      fname: 'Admin',
      lname : "Zohaib",
      email: 'admin@admin.com',
      password: 'admin',
    }, function() {
        console.log('finished populating users');
    });
  }
});

