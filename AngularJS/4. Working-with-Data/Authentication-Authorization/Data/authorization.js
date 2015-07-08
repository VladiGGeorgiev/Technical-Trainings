(function () {
    'use strict';

    angular.module('services.data')
        .factory('authorization', function () {
            function setData(data) {
                var currentUser = {
                    token: data.access_token,
                    username: data.userName,
                    loggedIn: true
                }
                
                localStorage.setItem('user', JSON.stringify(currentUser));
            }

            function clearData() {
                localStorage.clear();
            }

            function getToken() {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    var token = JSON.parse(localStorage.getItem('user')).token;
                    return token;
                }

                return false;
            }

            function getUsername() {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    var username = user.username;
                    return username;
                }

                return false;
            }

            function isLoggedIn() {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    var loggedIn = user.loggedIn;
                    return loggedIn;
                }

                return false;
            }

            return {
                isLoggedIn: isLoggedIn,
                getToken: getToken,
                getUsername: getUsername,
                setData: setData,
                clearData: clearData
            }
        });
}());