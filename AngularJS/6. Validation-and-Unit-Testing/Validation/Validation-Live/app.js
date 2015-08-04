(function () {
    'use strict';

    angular.module('app', ['ngMessages'])
    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.submit = function (user, form) {
                if (form.$valid) {
                    console.log('Send')
                }
                else {
                    console.log('Not Send')
                }
                console.log(user);
                console.log(form);
            }

            $scope.cancel = function () {
                $scope.user = {};
            }
        });
}());