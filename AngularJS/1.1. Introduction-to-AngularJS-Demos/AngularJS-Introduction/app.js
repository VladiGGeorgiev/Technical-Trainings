(function() {
    "use strict";

    angular.module("app", [])
        .controller("mainCtrl", function ($scope) {
            $scope.greeting = "Hello, from AngularJS";
            $scope.hello = "HELLO!";
            $scope.pesho = "pesho2";
        });
}());
