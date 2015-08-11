'use strict';

app.directive('render', function(){
	return {
		restrict: 'E',
		templateUrl: '/browser/app/render/render.html',
		controller: 'RenderController'
	}
});