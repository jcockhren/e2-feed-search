app.controller('SplashCtrl', ['$state', function($state) {

	angular.element(document).on('click', function() {
		$state.go('search');		
	});






}]);