//This is the code that is setting up our first controller.
var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){

	$scope.showAddQuote = false;
	$scope.showRemoveQuote = false;
	$scope.showFilter = false;
	$scope.list = dataService.getData();

	$scope.addQuote = function(){
		$scope.showAddQuote = !$scope.showAddQuote;
	}

	$scope.removeQuote = function (){
		$scope.showRemoveQuote = !$scope.showRemoveQuote;
	}

	$scope.filter = function (){
		$scope.showFilter = !$scope.showFilter;
	}

	$scope.submitQuote = function (){
		dataService.addData($scope.text, $scope.author);
		$scope.text = '';
		$scope.author = '';
		$scope.showAddQuote = false;
	}

	$scope.deleteQuote = function (){
		dataService.removeData($scope.text);
		$scope.text = '';
		$scope.author = '';
		$scope.showRemoveQuote = false;
	}

});