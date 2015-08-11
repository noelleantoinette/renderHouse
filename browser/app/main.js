'use strict';

var app = angular.module('renderhouse', ['ui.router']);

app.config(function ($urlRouterProvider){
	$urlRouterProvider.otherwise('/');
});