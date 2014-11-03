'use strict';

// Declare app level module which depends on views, and components
angular.module('EmptyProject', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
 	$routeProvider

	.when('/', {
		templateUrl: '/main/main.html',
		controller: 'MainViewContontroller',
	})

 	.otherwise({redirectTo: '/'});
}]);
