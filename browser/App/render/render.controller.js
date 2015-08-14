'use strict';

app.controller('RenderController', function ($scope, RenderService) {

	$scope.model = RenderService.getModel();
	
	$scope.$watch(function(){
		return RenderService.getModelUrl()
	}, function (newVal, oldVal){
		$scope.model = RenderService.getModel(); 
	});

});