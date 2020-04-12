'use strict';

var express = require('express');
var controller = require('./farms.controller');
var auth = require('./../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
// router.get('/:id', controller.show);
// router.get('/', auth.isAuthenticated(), controller.show);
router.get('/:id', controller.show);
router.get('/details/:id' , controller.details);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
