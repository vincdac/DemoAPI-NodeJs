var mongoose=require('mongoose');

var demoSchema = new mongoose.Schema({
	ewb:Number,
	to:String,
	from:String,
	vehicleNo:String
});

const demoModel = mongoose.model('demo1', demoSchema);

module.exports = demoModel
