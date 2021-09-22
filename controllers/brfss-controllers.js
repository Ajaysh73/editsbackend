const HttpError = require('../models/https-error');

const path = require('path');
function CreateModel(year) {
	//function to create collection , user_name  argument contains collection name
	let Model;
	return (Model = require(path.resolve('./models/layout'))(year));
}

function save_Layout_info(user_name, data) {
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
}

const getLayoutByYear = async (req, res, next) => {
	const year = req.params.year;

	Model = CreateModel(year);
	console.log(year);
	let layout;
	try {
		layout = await Model.find({}, null, { sort: { field_name: 1 } });
	} catch (error) {
		return next(
			new HttpError('Failed to find layout by year. Please try again', 500)
		);
	}

	if (!layout) {
		return next(new HttpError('No matching layout found ', 404));
	}
	res.json({ layout: layout });
};

module.exports.getLayoutByYear = getLayoutByYear;
