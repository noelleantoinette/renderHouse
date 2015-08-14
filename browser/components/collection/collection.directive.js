'use strict';

app.directive('collection', function(){
	return {
		restrict: 'E',
		templateUrl: '/browser/components/collection/collection.html',
		controller: 'ManagerController'
	}
});