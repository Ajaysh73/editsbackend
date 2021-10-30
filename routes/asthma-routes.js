// const express = require('express');
import express from 'express';

import * as asthmaControllers from '../controllers/asthma-controllers.js';

const router = express.Router();

router.get('/:year/:surveyType', asthmaControllers.getLayoutByYear); // surveyType - ADLT/CHLD

// module.exports = router;
export default router;
