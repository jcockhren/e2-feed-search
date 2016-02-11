app.controller('SearchCtrl', ['$http', function($http) {

	var vm = this;

	vm.searchByTitle = function() {

		$http.get('https://www.googleapis.com/books/v1/volumes?q=' + vm.titleQuery)
		.success(function(googleBooksResponse) {
			vm.bookTitleList = googleBooksResponse.data.items;
			console.log('vm.bookTitleList', vm.bookTitleList);
		}).error(function(error) {
			console.log('Error: ', Error);
		});
	
	};

}]);