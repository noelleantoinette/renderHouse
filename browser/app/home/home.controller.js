'use strict';

app.controller('HomeController', function ($scope, RenderService) {

    $scope.changeModel = function(){
    	RenderService.changeModel();
    }

});