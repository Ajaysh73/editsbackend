const express = require('express');

const generalControllers = require('../controllers/general-controllers');

const router = express.Router();

router.get('/zipcodes', generalControllers.getZipcodes);
router.get('/ctyfipscodes', generalControllers.getCountyFipscodes);
router.get('/months', generalControllers.getMonthscodes);
router.get('/fipscodes', generalControllers.getFipscodes);

module.exports = router;
