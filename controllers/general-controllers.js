const USZIP = require('../models/zipcode');
const USCOUNTYFIPS = require('../models/countyfipscode');
const USFIPS = require('../models/fipscode');
const USMONTH = require('../models/months');
const HttpError = require('../models/https-error');

const getZipcodes = async (req, res, next) => {
	let zipcodes;
	console.log('reached in getZipcodes');
	try {
		// zipcodes = await USZIP.find({}, null, { sort: { Zipcode: 1 } });
		zipcodes = await USZIP.find({}, { _id: false }, { sort: { Zipcode: 1 } });
		console.log(zipcodes.length);
		// res.status(200).json({ zipcodes: zipcodes });
	} catch (error) {
		return next(new HttpError('Failed to get zipcode. Please try again', 500));
	}
	if (!zipcodes) {
		return next(new HttpError('No matching zipcode found ', 404));
	}
	res.json({ zipcodes: zipcodes });
};

module.exports.getZipcodes = getZipcodes;

const getCountyFipscodes = async (req, res, next) => {
	let countyfipscodes;
	try {
		// zipcodes = await USZIP.find({}, null, { sort: { Zipcode: 1 } });
		countyfipscodes = await USCOUNTYFIPS.find(
			{},
			{ _id: false, NAMESTATE: false, NAMECOUNTY: false },
			{ sort: { FIPSSTATE: 1 } }
		);
	} catch (error) {
		return next(
			new HttpError('Failed to get ctyfips codes. Please try again', 500)
		);
	}
	if (!countyfipscodes) {
		return next(new HttpError('No matching zipcode found ', 404));
	}
	res.json({ countyfipscodes: countyfipscodes });
};
module.exports.getCountyFipscodes = getCountyFipscodes;

const getFipscodes = async (req, res, next) => {
	let fipscodes;
	try {
		// zipcodes = await USZIP.find({}, null, { sort: { Zipcode: 1 } });
		fipscodes = await USFIPS.find({}, { _id: false, STRATUM: false });
	} catch (error) {
		return next(new HttpError('Failed to get zipcode. Please try again', 500));
	}
	if (!fipscodes) {
		return next(new HttpError('No matching zipcode found ', 404));
	}
	res.json({ fipscodes: fipscodes });
};
module.exports.getFipscodes = getFipscodes;

const getMonthscodes = async (req, res, next) => {
	let monthscodes;
	try {
		// zipcodes = await USZIP.find({}, null, { sort: { Zipcode: 1 } });
		monthscodes = await USMONTH.find({}, { _id: false });
	} catch (error) {
		return next(new HttpError('Failed to get zipcode. Please try again', 500));
	}
	if (!monthscodes) {
		return next(new HttpError('No matching zipcode found ', 404));
	}
	res.json({ monthscodes: monthscodes });
};
module.exports.getMonthscodes = getMonthscodes;
