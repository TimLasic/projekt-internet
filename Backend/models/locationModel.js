var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var locationSchema = new Schema({
	'latitude' : Number,
	'longitude' : Number,
	'latitudeOld' : Number,
	'longitudeOld' : Number,
	'state' : String
});

module.exports = mongoose.model('location', locationSchema);
