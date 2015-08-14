'use strict';

app.config(function ($stateProvider){
	$stateProvider.state('upload', {
		url: '/upload',
		templateUrl: '/browser/app/upload/upload.html',
		controller: 'UploadController'
	});
});