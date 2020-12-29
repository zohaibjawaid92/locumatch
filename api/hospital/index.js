'use strict';

var express = require('express');
var controller = require('./hospital.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/hospitalOpportunity', controller.show);
router.post('/doctorProfileById/:id' , controller.doctorprofile);
router.post('/addContract' , controller.addcontract);
router.post('/getAllContract/:id' , controller.getallcontract);
router.post('/favourite' , controller.favourite);
router.post('/getHospitalProfileRecord' , controller.getHospitalProfileRecord);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
