// Bring in all third part libraries

var mongoose = require('mongoose');
var crypto = require('crypto');
var shortid = require('shortid'); //this is a module that can generate shorter unique IDs in lieu of the long MongoDB standard _id.  This was found in the workshop Auther and will be implmeneted because...why not?

// Bring in all outside files from within the app
var db = require('../../dbInit.js') // this file contains the connection to the database.  db represents a closure over the command mongoose.connect(databaseURI).connection
var Product = require('../product/product.model');
var Cart = require('../cart/cart.model');

var User = new mongoose.Schema({
	_id: {
		type: String,
		unique: true,
		default: shortid.generate
	},
	isAdmin: {type: Boolean, default: false},
	firstName: String,
	lastName: String,
	displayName:String,
	phone: String,
	userBlurb: String,
	email:{
		type: String,
		required:true,
		unique:true,
	},
	password: {
		type: String,
		set: hash
	},
	salt: {type: String, default: generateSalt},
	pictureUrl: String
})

function generateSalt (){
	return crypto.randomBytes(16).toString('base64');
}

function hash (password){
	return crypto.pbkdf2Sync(password,this.salt,10000,16).toString('base64');
}


User.methods.hash = hash;

User.methods.getProduct = function () {
	return Product.find({owner: this._id}).exec();
};

User.methods.getCart= function () {
	return Cart.find({user: this._id}).exec();
};

User.methods.authenticate = function(password){
	return this.password === this.hash(password);
}

User.statics.findByEmails = function (set) {
	return this.find({emails: {$elemMatch: {$in: set}}});
};

User.statics.findByEmail = function (email) {
	return this.findOne({email: email});
};

module.exports = db.model('User',User)

