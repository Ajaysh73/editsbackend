// var mongoose = require('mongoose');
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const USMONTH = mongoose.model('USMONTH', new Schema({}), 'USMONTH');
export default USMONTH;
// module.exports = USMONTH;
