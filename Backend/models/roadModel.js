var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var roadSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('road', roadSchema);
