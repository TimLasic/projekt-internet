var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var locationSchema = new Schema({
	'latitude' : Number,
	'longitude' : Number,
	'state' : String,
	'timestamp' : Date
});

module.exports = mongoose.model('location', locationSchema);
