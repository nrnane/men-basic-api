var mongoose = require("mongoose");
var Scheme = mongoose.Schema;
var BookSchema= new Scheme({
    title:String,
    author:String,
    category:String
});
module.exports = mongoose.model('Book',BookSchema);