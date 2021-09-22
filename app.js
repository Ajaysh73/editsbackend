const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const HttpError = require('./models/https-error');

const dotenv = require('dotenv');

const brfssRoutes = require('./routes/brfss-routes');
const asthmaRoutes = require('./routes/asthma-routes');
const generalRoutes = require('./routes/general-routes');

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
app.get('/', (req, res) => {
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
	})
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));
