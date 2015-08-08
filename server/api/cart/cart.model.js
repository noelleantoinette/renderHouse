// Bring in all third part libraries

var mongoose = require('mongoose');

// Bring in all outside files from within the app
var db = require('../../../dbInit.js') // this file contains the connection to the database.  db represents a closure over the command mongoose.connect(databaseURI).connection


var Cart = new mongoose.Schema{
	user: {type:objectId, ref:'User', required:true}
	products:[type:objectId, ref:'Product']
};

module.exports = db.Model("Cart",Cart)
