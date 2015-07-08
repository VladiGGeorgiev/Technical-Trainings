(function () {
    'use strict';

    angular.module('services.data')
        .factory('profileServices', function ($http, BaseService, authorization) {
            function getFeed(pageSize) {
                pageSize = pageSize || 10;

                return $http({
                    method: 'GET',
                    url: BaseService.url + 'me/feed?PageSize=' + pageSize,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + authorization.getToken()
                    }
                });
            }

            return {
                feed: getFeed
            }
        });
}());