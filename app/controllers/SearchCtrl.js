app.controller('SearchCtrl', ['$http', '$stateParams', '$state', function($http, $stateParams, $state) {

	var vm = this;
	vm.bookTitleList;
	vm.volumeId = $stateParams.volumeId;


	vm.searchByTitle = function(title) {

		$http.get('https://www.googleapis.com/books/v1/volumes?', { 
			params: {
				q : title
			}
		})
		.success(function(response) {
			console.log('response', response);
			vm.bookTitleList =  response.items;
			return vm.bookTitleList.map(function(item) {
				console.log('item.volumeInfo.title', item.volumeInfo.title);
				return item.volumeInfo.title;
			});
		});
		// .error(function(error) {
		// 	console.log('Error: ', Error);
		// });

	};

	vm.clear = function() {
		vm.search_input = document.getElementById('search-input');
		$viewValue = null;
		vm.bookTitleList = {};
	};

	vm.selectThisBook = function(book) {
		vm.selectedBook = book;
		console.log('vm.selectedBook', vm.selectedBook);
		// $state.go('preview');
	};


}]);