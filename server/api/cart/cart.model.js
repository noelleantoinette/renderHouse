// Bring in all third part libraries

var mongoose = require('mongoose');

// Bring in all outside files from within the app
var db = require('../../dbInit.js') // this file contains the connection to the database.  db represents a closure over the command mongoose.connect(databaseURI).connection


var Cart = new mongoose.Schema({
	user: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
	products:[{type:mongoose.Schema.Types.ObjectId, ref:'Product'}],
	date: {type: Date}
});

module.exports = db.model("Cart",Cart)
