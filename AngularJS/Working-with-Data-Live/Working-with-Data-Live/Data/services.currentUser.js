(function () {
    'use strict';

    angular.module('services.data')
        .factory('currentUser', [function () {
            var currentUser = {
                token: '',
                username: '',
                isLoggedIn: false
            }

            var initializeData = function initializeData() {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    currentUser.token = user.token;
                    currentUser.username = user.username;
                    currentUser.isLoggedIn = true;
                }
            }

            initializeData();

            function setData(data) {
                currentUser.token = data.access_token;
                currentUser.username = data.userName;
                currentUser.isLoggedIn = true;

                localStorage.setItem('user', JSON.stringify(currentUser));
            }

            function getToken() {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    return user.token;
                }

                return null;
            }

            function getUsername() {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    return user.username;
                }

                return null;
            }

            function clearData() {
                localStorage.removeItem('user');
                currentUser.token = '';
                currentUser.username = '';
                currentUser.isLoggedIn = false;
            }

            return {
                user: currentUser,
                setData: setData,
                clearData: clearData
            }
        }]);
}());