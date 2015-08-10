'use strict';

var app = require('express')(),
	path = require('path');

// Middleware
app.use(require('./logging.middleware'));
app.use(require('./requestState.middleware'));
app.use(require('./statics.middleware'));

// Get Data
app.use('/api', require('../api'));

// Serve Index
app.get('/*', function (req, res){
	var index = path.join(__dirname, '..', '..', 'public', 'index.html');
});

// Handle Errors
app.use(require('./error.middleware'));

module.exports = app;