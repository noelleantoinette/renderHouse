'use strict';

app.factory('RenderService', function(){

	var renderObj = {
		url: 'models/jeep1.ms3d.json'
	}

	return {
		changeModelUrl: function(newUrl){
			renderObj.url = newUrl;
			return renderObj.url;
		},
		getModelUrl: function(){
			return renderObj.url;
		}
	}

});