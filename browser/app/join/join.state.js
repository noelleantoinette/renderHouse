'use strict';

app.config(function ($stateProvider){
	$stateProvider.state('join', {
		url: '/join',
		templateUrl: 'browser/app/join/join.html',
		controller: 'JoinController'
	});
});