import fs from 'fs';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import HttpError from './models/https-error.js';

import dotenv from 'dotenv';

import brfssRoutes from './routes/brfss-routes.js';
import asthmaRoutes from './routes/asthma-routes.js';
import generalRoutes from './routes/general-routes.js';
import userRoutes from './routes/users.js';
import resultsRoutes from './routes/results.js';

const app = express();
dotenv.config();
app.use(express.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
	next();
});

app.use('/brfss', brfssRoutes); // => /brss
app.use('/asthma', asthmaRoutes); // => /asthma
app.use('/general', generalRoutes); // => /general
app.use('/user', userRoutes); // => user login
app.use('/result', resultsRoutes); // => save results

app.use('/', (req, res) => {
	return res.send('Hello from BRFSS API.');
});

// app.use((req, res, next) => {
// 	const error = new HttpError('Could not find this route.', 404);
// 	res.send({ Error: { msg: error.message, code: error.code } }).status(404);
// 	return next(error);
// });

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));
