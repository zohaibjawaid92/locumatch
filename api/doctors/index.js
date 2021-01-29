'use strict';

var express = require('express');
var controller = require('./doctors.controller');

var router = express.Router();

// router.get('/', controller.index);
// router.get('/:id', controller.show);
router.post('/hospitalContractOpportunities' , controller.hospitalopportunities);
router.post('/doctorAccDetailsExists/:id', controller.checkdoctoraccdetails);
router.post('/createDoctorsContracts' , controller.createdoctorcontract);
router.post('/getAlldataContracts/:id' , controller.getallcontracts);
router.post('/getContractsDataByUser/:id' , controller.getapprovedcontractsbydoctor);
router.post('/getDoctorProfileRecord' , controller.getDoctorProfileRecord);
router.post('/doctorContractUpdateByHospital/:id', controller.doctorContractUpdateByHospital);
router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
