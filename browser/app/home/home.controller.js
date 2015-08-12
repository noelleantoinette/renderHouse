'use strict';

app.controller('HomeController', function ($scope, RenderService) {

    $scope.changeModelUrl = function(newUrl){
    	RenderService.changeModelUrl(newUrl);
    }

});