	var app = angular.module('BooksApp', ['ui.router', 'ui.bootstrap', 'ngMaterial']);

	app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 
		function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('search', {
			url: '/search',
			templateUrl: 'partials/search.html',
			controller: 'SearchCtrl',
			controllerAs: 'searchCtrl'
		})
		.state('preview', {
			url: '/search/:volumeId',
			templateUrl: 'partials/book-preview.html',
			controller: 'SearchCtrl',
			controllerAs: 'searchCtrl'
		});
		
	}]);
