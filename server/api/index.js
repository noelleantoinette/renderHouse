// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.html');
// });

// module.exports = router;

'use strict';

var router = require('express').Router();

router.use('/users', require('./users/users.router'));

router.use('/product', require('./product/product.router'));

router.us('/cart', require('./cart/cart.router'));

module.exports = router;