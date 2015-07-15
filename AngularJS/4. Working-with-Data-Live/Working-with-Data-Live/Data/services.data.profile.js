(function () {
    'use strict';

    angular.module('services.data')
        .factory('profileServices', function () {

            return {
                getFeed: getFeed
            }
        });
}());