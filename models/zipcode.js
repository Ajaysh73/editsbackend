var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const USZIP = mongoose.model('USZIP', new Schema({}), 'USZIP');

module.exports = USZIP;
