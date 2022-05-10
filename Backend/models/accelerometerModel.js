var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var accelerometerSchema = new Schema({
	'x' : Number,
	'y' : Number,
	'z' : Number,
	'locationId' : String
});

module.exports = mongoose.model('accelerometer', accelerometerSchema);
