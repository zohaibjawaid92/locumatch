/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/settings', require('./api/setting'));
  app.use('/api/dashboard', require('./api/dashboard'));
  app.use('/api/users', require('./api/user'));
  app.use('/auth', require('./auth'));
  app.use('/api/doctors' , require('./api/doctors'));
  app.use('/api/admin' , require('./api/admin'));
  app.use('/api/hospital' , require('./api/hospital'));
  app.use('/api/accounts' , require('./api/account_settings'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
