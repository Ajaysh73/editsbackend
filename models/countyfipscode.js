// var mongoose = require('mongoose');
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

const USCOUNTYFIPS = mongoose.model('USFIPS', new Schema({}), 'USFIPS');
export default USCOUNTYFIPS;
// module.exports = USCOUNTYFIPS;
