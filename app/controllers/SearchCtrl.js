app.controller('SearchCtrl', ['$http', '$stateParams', function($http, $stateParams) {

	var vm = this;
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

	vm.selectThisBook = function(book) {
		console.log('selectThisBook clicked!');
		vm.selectedBook = book;
		console.log('vm.selectedBook.id', vm.selectedBook.id);
		console.log('vm.selectedBook', vm.selectedBook);
	};


}]);