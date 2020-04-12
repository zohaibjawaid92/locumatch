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
      name: 'Test User',
      email: 'doctor@doctor.com',
      password: 'doctor',
      phoneno : +921 + "-" + 1234567
    },
    {
      provider: 'local',
      role: 'hospital',
      name: 'Admin',
      email: 'hospital@locumatch.com',
      password: 'hospital',
      phoneno : +921 + "-" + 1234567
    }, 
    {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin',
      phoneno : +921 + "-" + 1234567
    }, function() {
        console.log('finished populating users');
    });
  }
});

