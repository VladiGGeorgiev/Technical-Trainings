(function () {
    'use strict';

    angular.module('app')
        .controller('AuthController', function ($scope, $location, authentication) {
            $scope.register = function register(user) {
                authentication.register(user)
                    .success(function (data) {
                        $location.path('/');
                    })
                    .error(function (error) {
                        $scope.message = error.error_description;
                        console.log(error.error_description);
                    });
            }

            $scope.login = function login(user) {
                authentication.login(user)
                    .success(function (data) {
                        $location.path('/');
                    })
                    .error(function (error) {
                        $scope.message = error.error_description;
                        console.log(error.error_description);
                    });
            }

            $scope.logout = function logout() {
                authentication.logout()
                    .success(function (data) {
                        $location.path('/');
                    })
                    .error(function (error) {
                        $scope.message = error.error_description;
                        console.log(error.error_description);
                    });
            }
        });
}());