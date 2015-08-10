// Bring in all third part libraries

var mongoose = require('mongoose');
var shortid = require('shortid'); //this is a module that can generate shorter unique IDs in lieu of the long MongoDB standard _id.  This was found in the workshop Auther and will be implmeneted because...why not?

// Bring in all outside files from within the app
var db = require('../../dbInit') // this file contains the connection to the database.  db represents a closure over the command mongoose.connect(databaseURI).connection

var Product = new mongoose.Schema({
	title: {type: String, maxlength: 20, required:true},
	description: {type: String, max: 300},
	snapshotFileUrl: {type:String, required:true},
	highResFileUrl: {type:String, required:true},
	tags: {type:String, required:true},
	license: String,
	formatsAvailable: {type:String, required:true},
	price: Number,
	freeOption: Boolean,
	owner: {type: mongoose.Schema.Types.ObjectId, ref:"User", required:true},
	timesDownloaded: Number,
	comments: [{type: mongoose.Schema.Types.ObjectId, ref:"UserComments"}]
});

module.exports = db.Model("Product",Product);



