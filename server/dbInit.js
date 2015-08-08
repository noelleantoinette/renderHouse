var mongoose = require('mongoose');
var Promise = require('bluebird');

Promise.promisfyALL(mongoose);

var databaseURI = 'mongodb://localhost:27017/renderhouse'

var db = mongoose.connect(databaseURI).connection

db.on('open',function(){
	console.log('Database connection successfuly opened')
});

db.on('error',function(err){
	console.error('Database connection error',err)
});

module.exports = db;