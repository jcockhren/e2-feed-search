app.controller('SearchCtrl', ['$http', '$stateParams', '$state', function($http, $stateParams, $state) {

	var vm = this;
	vm.bookTitleList;

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
		document.getElementsByName('md-divider') = vm.cleanup;
		vm.cleanup = null;
		// Not sure how to get this function to clear the md-divider after the array of returned books is cleared out.
	};

	vm.selectThisBook = function(book) {
		vm.selectedBook = book;
		console.log('vm.selectedBook', vm.selectedBook);
		// $state.go('preview');
	};


}]);