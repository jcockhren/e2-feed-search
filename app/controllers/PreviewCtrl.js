app.controller('PreviewCtrl', ['$stateParams', function($stateParams) {

	var vm = this;

	console.log('$stateParams', $stateParams);
	vm.book = $stateParams.bookPreview;


}]);