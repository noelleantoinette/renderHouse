'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('products', {
		url: '/products',
		templateUrl: '/browser/app/product/list/product.list.html',
		controller: 'ProductListCtrl'
	});
});