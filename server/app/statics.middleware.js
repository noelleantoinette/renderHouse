'use strict';

var express = require('express'),
	router = express.Router(),
	path = require('path');

// Routes
var rootPath = path.join(__dirname, '..', '..');
var publicPath = path.join(rootPath, 'public');
var browserPath = path.join(rootPath, 'browser');

// Serve
router.use(express.static(publicPath));
router.use('/browser', express.static(browserPath));


module.exports = router;