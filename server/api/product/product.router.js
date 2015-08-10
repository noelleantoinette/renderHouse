'use strict'

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');
var Product = require('./product.model');

router.param('id', function (req, res, next, id) {
	Product.findById(id).exec()
	.then(function (product) {
		if (!product) throw HttpError(404);
		else {
			req.Product = product;
			next();
		}
	})
	.then(null, next);
});


router.get('/', function (req, res, next) {
	Product.find({}).populate('owner').exec()
	.then(function (products) {
		res.json(products);
	})
	.then(null, next);
});

router.post('/', function (req, res, next) {
	Product.create(req.body)
	.then(function (Product) {
		return Product.populateAsync('owner');
	})
	.then(function (populated) {
		res.status(201).json(populated);
	})
	.then(null, next);
});