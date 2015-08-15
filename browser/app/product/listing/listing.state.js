'use strict';

app.config( function($stateProvider){

	$stateProvider.state('listing', {
		url: '/',
		templateUrl: '/browser/app/product/listing/listing.html',
		controller: 'ListingController',
		resolve: {
			models: function (Model) {
				console.log(Model.fetchAll());
				return Model.fetchAll();
			}
		}
	});

});