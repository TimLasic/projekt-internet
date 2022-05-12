var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var roadSchema = new Schema({
	'road' : [String]
});

module.exports = mongoose.model('road', roadSchema);
