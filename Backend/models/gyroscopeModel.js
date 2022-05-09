var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var gyroscopeSchema = new Schema({
	'xRotation' : Number,
	'yRotation' : Number,
	'zRotation' : Number,
	'timestamp' : Date
});

module.exports = mongoose.model('gyroscope', gyroscopeSchema);
