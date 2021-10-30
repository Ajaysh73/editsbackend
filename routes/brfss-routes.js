// const express = require('express');
import express from 'express';

// const brfssControllers = require('../controllers/brfss-controllers');
import * as brfssControllers from '../controllers/brfss-controllers.js';
const router = express.Router();

router.get('/:year', brfssControllers.getLayoutByYear);

// module.exports = router;
export default router;
