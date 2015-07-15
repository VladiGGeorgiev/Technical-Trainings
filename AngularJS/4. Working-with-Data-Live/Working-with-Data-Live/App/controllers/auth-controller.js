(function () {
    'use strict';

    angular.module('app')
        .controller('AuthController', ['$scope', '$location', 'authentication', 'currentUser', function ($scope, $location, authentication, currentUser) {
            $scope.user = {
                username: '',
                password: ''
            };

            $scope.register = function (user, form) {
                // Validation
                authentication.register(user)
                    .success(function (data) {
                        currentUser.setData(data);
                        $location.path('/');

                    })
                    .error(function (error) {
                        $scope.message = error.error_description;
                    });
            }

            $scope.login = function (user, form) {
                // Validation
                authentication.login(user)
                    .success(function (data) {
                        currentUser.setData(data);
                        $location.path('/');
                    })
                    .error(function (error) {
                        $scope.message = error.error_description;
                    });
            }

            $scope.logout = function () {
                authentication.logout()
                    .success(function () {
                        $location.path('/');
                    });
            }
        }])
}());