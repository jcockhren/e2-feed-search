	var app = angular.module('BooksApp', ['ui.router', 'ui.bootstrap', 'ngMaterial']);

	app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 
		function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('splash', {
			url: '/',
			templateUrl: '/partials/splash.html',
			controller: 'SplashCtrl',
			controllerAs: 'splashCtrl'
		})
		.state('search', {
			url: '/search',
			templateUrl: 'partials/search.html',
			controller: 'SearchCtrl',
			controllerAs: 'searchCtrl'
		})
		.state('preview', {
			url: '/search/preview',
			params: {bookPreview: 'book'},
			templateUrl: 'partials/book-preview.html',
			controller: 'PreviewCtrl',
			controllerAs: 'previewCtrl'
		});
		
	}]);
