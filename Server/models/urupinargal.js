var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


var postingSchema=new Schema
({
    name:{type :String},
	posting:{type:String},
	pic:{type:String},
	mobno:{type:String},
    address:{type:String}
});

module.exports=mongoose.model("urupinargal",postingSchema)