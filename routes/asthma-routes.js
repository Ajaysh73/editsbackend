const express = require('express');

const asthmaControllers = require('../controllers/asthma-controllers');

const router = express.Router();

router.get('/:year/:surveyType', asthmaControllers.getLayoutByYear); // surveyType - ADLT/CHLD

module.exports = router;
