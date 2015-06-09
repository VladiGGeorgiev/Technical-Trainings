(function() {
    "use strict";

    angular.module("app", [])
        .controller("mainCtrl", function ($scope) {
            $scope.greeting = "Hello, from AngularJS";
        });
}());
