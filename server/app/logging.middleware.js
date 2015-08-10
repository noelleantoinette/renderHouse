'use strict';

var router = require('express').Router(),
	logger = require('morgan');

// Logging to Console
router.use(logger('dev'));


module.exports = router;