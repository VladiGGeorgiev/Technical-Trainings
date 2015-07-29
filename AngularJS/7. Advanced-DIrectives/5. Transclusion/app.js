(function () {
    'use strict';

    angular.module('app', []);

    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.message = 'My funny message!';
        });

    angular.module('app')
        .directive('displayBox', function ($parse) {
            return {
                restrict: 'E',
                templateUrl: 'box.html',
                controller: function ($scope) {
                    $scope.hidden = false;
                    $scope.closeBox = function () {
                        $scope.hidden = true;
                    }
                },
                transclude: true,
            }
        });
}());