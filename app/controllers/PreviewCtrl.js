app.controller('PreviewCtrl', ['$stateParams', function($stateParams) {

	var vm = this;

	console.log('$stateParams', $stateParams);
	vm.book = $stateParams.bookPreview;

	 var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));

	viewer.load(vm.book.id);


}]);