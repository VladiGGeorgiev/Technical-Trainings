app.directive('myDirective', function() {
    return {
        restrict: 'A',
        replace: false,
        template: '<input type="number" ng-model="num" />'
    };
});