app.controller('SearchCtrl', ['$http', '$timeout', '$stateParams', '$state', function($http, $timeout, $stateParams, $state) {

	var vm = this;
	vm.selectedItem = null;
  vm.searchText = null;
	vm.bookTitleList = null;


	vm.searchByTitle = function() {

		$http.get('https://www.googleapis.com/books/v1/volumes?q=' + vm.searchText)
		.success(function(response) {
			vm.bookTitleList = response.items;
			return response.items;
		// 	vm.bookTitleList =  response.items;
		// }).error(function(error) {
		// 	console.log('Error: ', Error);
		});

	};

	vm.searchCall = function() {
		$timeout(vm.searchByTitle, 200);
	};

	vm.clear = function() {
		vm.searchText = "";
		vm.bookTitleList = {};
		// Not sure how to get this function to clear the md-divider after the array of returned books is cleared out.
	};

	vm.selectThisBook = function(book) {
		vm.selectedBook = book;
		console.log('vm.selectedBook', vm.selectedBook);
		// $state.go('preview');
	};


}]);