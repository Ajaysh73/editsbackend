// var mongoose = require('mongoose');
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const USFIPS = mongoose.model('USFIPS_STRATUM', new Schema({}), 'USFIPS_STRATUM');
export default USFIPS;
// module.exports = USFIPS;
