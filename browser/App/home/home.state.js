'use strict';

app.config(function($stateProvider){

	$stateProvider.state('home', {
		url: '/',
		views: {
			'render': {
				templateUrl: '/browser/app/render/render.html',
				controller: 'RenderController'
			},
			'app': {
				templateUrl: '/browser/app/home/home.html',
				controller: function ($scope){
					$scope.letters = ['X','Y','Z'];
				}
			}
		}
	});

});
