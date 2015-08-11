'use strict';

app.config( function($stateProvider){

	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/browser/app/home/home.html',
		controller: function ($scope){
			$scope.letters = ['X','Y','Z'];
		}
	});

});