var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const USFIPS = mongoose.model(
	'USFIPS_STRATUM',
	new Schema({}),
	'USFIPS_STRATUM'
);

module.exports = USFIPS;
