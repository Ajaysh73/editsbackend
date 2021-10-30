// var mongoose = require('mongoose');
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const USZIP = mongoose.model('USZIP', new Schema({}), 'USZIP');
export default USZIP;
// module.exports = USZIP;
