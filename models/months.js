var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const USMONTH = mongoose.model('USMONTH', new Schema({}), 'USMONTH');

module.exports = USMONTH;
