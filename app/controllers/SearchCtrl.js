app.controller('SearchCtrl', ['$http', function($http) {

	var vm = this;

	vm.searchByTitle = function() {

		$http.get('https://www.googleapis.com/books/v1/volumes?q=' + vm.titleQuery)
		.success(function(response) {
			console.log('response', response);
			vm.bookTitleList =  response.items;
		}).error(function(error) {
			console.log('Error: ', Error);
		});
	
	};

}]);