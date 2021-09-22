const express = require('express');

const brfssControllers = require('../controllers/brfss-controllers');

const router = express.Router();

router.get('/:year', brfssControllers.getLayoutByYear);

module.exports = router;
