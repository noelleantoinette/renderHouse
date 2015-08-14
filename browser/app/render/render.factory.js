'use strict';

app.factory('RenderService', function(){

	var renderObj = {
		url: 'models/untitled-scene/untitled-scene.json',
		author: 'Mary Anne'
	}

	return {
		changeModelUrl: function(newUrl){
			renderObj.url = newUrl;
			return renderObj;
		},
		changeModel: function(){
			renderObj = {
				url: 'models/baymax.json',
				author: 'Milton Glaser'
			}
		},
		getModelUrl: function(){
			return renderObj.url;
		},
		getModel: function(){
			return renderObj;
		}
	}

});