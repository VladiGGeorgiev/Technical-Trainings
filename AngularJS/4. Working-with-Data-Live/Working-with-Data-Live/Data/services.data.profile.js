(function () {
    'use strict';

    angular.module('services.data')
        .factory('profileServices', function ($http, currentUser, BaseServiceUrl) {
            var pageSize = 10
            function getFeed() {
                var token = currentUser.user.token;
                var request = {
                    url: BaseServiceUrl + 'me/feed',
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    params: {
                        PageSize: pageSize
                    }
                }

                return $http(request);
            }

            return {
                getFeed: getFeed
            }
        });
}());