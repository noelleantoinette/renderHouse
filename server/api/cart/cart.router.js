'use strict'

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');
var Cart = require('./cart.model');

router.param('id', function (req, res, next, id) {
	Cart.findById(id).exec()
	.then(function (cart) {
		if (!cart) throw HttpError(404);
		else {
			req.cart = cart;
			next();
		}
	})
	.then(null, next);
});

router.get('/', function (req, res, next) {
	Cart.find({}).populate('user').exec()
	.then(function (carts) {
		res.json(carts);
	})
	.then(null, next);
});

router.post('/', function (req, res, next) {
	Cart.create(req.body)
	.then(function (cart) {
		return cart.populateAsync('user');
	})
	.then(function (populated) {
		res.status(201).json(populated);
	})
	.then(null, next);
});