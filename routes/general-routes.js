// const express = require('express');
import express from 'express';

// const generalControllers = require('../controllers/general-controllers');
import * as generalControllers from '../controllers/general-controllers.js';

const router = express.Router();

router.get('/zipcodes', generalControllers.getZipcodes);
router.get('/ctyfipscodes', generalControllers.getCountyFipscodes);
router.get('/months', generalControllers.getMonthscodes);
router.get('/fipscodes', generalControllers.getFipscodes);

// module.exports = router;
export default router;
