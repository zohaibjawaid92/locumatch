'use strict';

var express = require('express');
var controller = require('./crops.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
// router.get('/:id', controller.show);
router.get('/', auth.isAuthenticated() , controller.show);
router.get('/:id' , auth.isAuthenticated() , controller.show);
router.get('/details/:id' , auth.isAuthenticated() , controller.details);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', auth.isAuthenticated() , controller.destroy);

module.exports = router;
