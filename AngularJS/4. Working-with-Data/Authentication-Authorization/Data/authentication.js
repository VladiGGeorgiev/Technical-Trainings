(function () {
    'use strict';

    angular.module('services.data')
        .factory('authentication', function ($http, BaseService, authorization) {
            function registerUser(user) {
                var request = {
                    method: 'POST',
                    url: BaseService.url + 'users/register',
                    data: user,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                };

                return $http(request)
                    .success(function (data) {
                        authorization.setData(data);
                    });
            }

            function loginUser(user) {
                return $http({
                    method: 'POST',
                    url: BaseService.url + 'users/login',
                    data: user,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).success(function (data) {
                    authorization.setData(data);
                });
            }

            function logoutUser() {
                return $http({
                    method: 'POST',
                    url: BaseService.url + 'users/logout',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + authorization.getToken()
                    }
                }).success(function (data) {
                    authorization.clearData(data);
                });
            }

            return {
                register: registerUser,
                login: loginUser,
                logout: logoutUser
            };
        });
}());