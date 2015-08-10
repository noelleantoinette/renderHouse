'use strict';

var router = require('express').Router();

// Handle 500 Errors
router.use(function (err, req, res, next){
	err.status = err.status || 500;
	if (process.env.NODE_ENV == 'development'){
		console.log(err.stack);
	}
	res.status(err.status).send(err);
});


module.exports = router;