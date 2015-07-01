(function () {
    'use strict';

    angular.module('socialNetworkApp')
        .controller('mainController', ['$scope', 'authentication', 'dataService', function ($scope, authentication, dataService) {
            $scope.registerUser = function (userData) {
                userData.confirmPassword = userData.password;
                var rand = Math.random();
                userData.email = rand + 'test@gmail.com';
                userData.name = 'Test' + rand;
                authentication.registration.registerUser(userData,
                    function () {
                        $scope.message = 'Registration successful!';
                        $scope.login();
                    },
                    function (response) {
                        $scope.isLoggedIn = false;
                        $scope.message = response.statusText + '\r\n';

                        if (response.data.exceptionMessage) {
                            $scope.message += response.data.exceptionMessage + '\r\n';
                        }

                        if (response.data.modelState) {
                            for (var key in response.data.modelState) {
                                $scope.message += response.data.modelState[key] + '\r\n';
                            }
                        }
                    })
            };

            $scope.login = function () {
                authentication.login.loginUser($scope.userData,
                    function (data) {
                        $scope.isLoggedIn = true;
                        $scope.message = '';
                        $scope.token = data.access_token;
                    },
                    function (response) {
                        $scope.isLoggedIn = false;

                        $scope.message = response.statusText + '\r\n';

                        if (response.data.exceptionMessage) {
                            $scope.message += response.data.exceptionMessage + '\r\n';
                        }

                        if (response.data.modelState) {
                            for (var key in response.data.modelState) {
                                $scope.message += response.data.modelState[key] + '\r\n';
                            }
                        }
                    })
            };
        }]);
}());