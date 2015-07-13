(function () {
    'use strict';

    angular.module('services.data')
        .factory('authentication', function ($http, BaseServiceUrl, currentUser) {
            function registerUser(user) {
                var request = {
                    url: BaseServiceUrl + 'users/register',
                    method: 'POST',
                    data: user
                }

                return $http(request);
            }

            function loginUser(user) {
                var request = {
                    url: BaseServiceUrl + 'users/login',
                    method: 'POST',
                    data: user
                }

                return $http(request);
            }

            function logoutUser() {
                var request = {
                    url: BaseServiceUrl + 'users/logout',
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer ' + currentUser.user.token
                    }
                }

                return $http(request)
                    .success(function (data) {
                        currentUser.clearData();
                    });
            }

            return {
                register: registerUser,
                login: loginUser,
                logout: logoutUser
            }
        });
}());