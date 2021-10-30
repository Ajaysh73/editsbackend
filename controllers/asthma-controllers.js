// const path = require('path');
// const HttpError = require('../models/https-error');
import path from 'path';
import HttpError from '../models/https-error.js';
function CreateModel(year, surveyType) {
	//function to create collection , user_name  argument contains collection name
	let Model;
	return (Model = require(path.resolve('./models/layout'))(year, surveyType));
}

export const save_Layout_info = (user_name, data) => {
	//function to save Layout info , data argument contains layout info
	var UserModel = mongoose.model(user_name);
	var usermodel = UserModel(data);
	usermodel.save(function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('\nSaved');
		}
	});
};

export const getLayoutByYear = async (req, res, next) => {
	// /:year/:surveyType
	const year = req.params.year;
	const surveyType = req.params.surveyType;

	Model = CreateModel(year, surveyType);
	console.log(year);
	let layout;
	try {
		layout = await Model.find({}, null, { sort: { field_name: 1 } });
		// layout = await Model.find({});
	} catch (error) {
		return next(new HttpError('Failed to find layout by year. Please try again', 500));
	}

	if (!layout) {
		return next(new HttpError('No matching layout found ', 404));
	}
	res.json({ layout: layout });
};

// module.exports.getLayoutByYear = getLayoutByYear;
