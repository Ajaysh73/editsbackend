var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const USCOUNTYFIPS = mongoose.model('USFIPS', new Schema({}), 'USFIPS');

module.exports = USCOUNTYFIPS;
