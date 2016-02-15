app.controller('SearchCtrl', ['$http', '$stateParams', '$state', function($http, $stateParams, $state) {

	var vm = this;
	vm.bookTitleList;
	vm.volumeId = $stateParams.volumeId;


	vm.searchByTitle = function() {

		$http.get('https://www.googleapis.com/books/v1/volumes?q=' + vm.titleQuery)
		.success(function(response) {
			console.log('response', response);
			vm.bookTitleList =  response.items;
		}).error(function(error) {
			console.log('Error: ', Error);
		});

	};

	vm.clear = function() {
		vm.titleQuery = "";
		vm.bookTitleList = {};
	};

	vm.selectThisBook = function(book) {
		vm.selectedBook = book;
		console.log('vm.selectedBook', vm.selectedBook);
		// $state.go('preview');
	};


}]);