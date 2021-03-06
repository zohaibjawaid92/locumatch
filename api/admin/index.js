'use strict';

var express = require('express');
var controller = require('./admin.controller');

var router = express.Router();

router.get('/doctors', controller.index);
router.get('/hospital', controller.hospitals);
router.get('/contracts', controller.contracts);

// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
