(function () {
    'use strict';

    angular.module('common')
        .factory('authentication', ['$resource', '$http', 'appSettings', function ($resource, $http, appSettings) {
            return {
                registration: $resource(appSettings.serverPath + 'api/Users/Register', null, {
                    'registerUser': { method: 'POST' }
                }),
                login: $resource(appSettings.serverPath + 'api/Users/Login', null, {
                    'loginUser': {
                        method: 'POST',
                        //headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    },
                }),
            }
        }])
}());