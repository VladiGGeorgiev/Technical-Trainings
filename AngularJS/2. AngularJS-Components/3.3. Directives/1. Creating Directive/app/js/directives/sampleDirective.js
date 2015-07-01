app.directive('sampleDirective', function() {
	return {
		restrict: 'A', // Can be A, E, C..
		template: '<input type="text" ng-model="text" /> {{text}} <br />', // Better use: templateUrl
	};
});