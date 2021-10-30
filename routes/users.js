// const express = require('express');
import express from 'express';

// const userControllers = require('../controllers/user-controllers');
import * as userControllers from '../controllers/user-controllers.js';

const router = express.Router();

router.post('/signin', userControllers.signin); // surveyType - ADLT/CHLD
router.post('/signup', userControllers.signup); // surveyType - ADLT/CHLD

// module.exports = router;
export default router;
