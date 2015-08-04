(function () {
    'use strict';

    angular.module('app', ['ngMessages'])
    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.submit = function (user, form) {
                console.log(user);
                console.log(form);
            }

            $scope.cancel = function () {
                $scope.user = {};
            }
        });
}());