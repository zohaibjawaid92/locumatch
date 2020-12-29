'use strict';

var express = require('express');
var controller = require('./account_settings.controller');
var auth = require('../../auth/auth.service');


var router = express.Router();

router.get('/', controller.index);
router.get('/',  controller.show);
router.get('/:id' , controller.show);
router.post('/', controller.create);

module.exports = router;
