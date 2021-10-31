import express from 'express';

import * as resultsControllers from '../controllers/results-controllers.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/save', auth, resultsControllers.save); // save edit results
router.get('/reterive/:fileName', auth, resultsControllers.reterive); // get edit results
// router.post('/signup', userControllers.signup); //

export default router;
