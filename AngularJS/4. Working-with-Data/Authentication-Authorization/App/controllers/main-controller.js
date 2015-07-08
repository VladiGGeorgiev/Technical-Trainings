(function () {
    'use strict';

    angular.module('app')
        .controller('MainController', function ($scope, authorization, profileServices) {
            $scope.isLoggedIn = authorization.isLoggedIn();
            $scope.username = authorization.getUsername();
            $scope.name = "Facebook App"
            profileServices.feed().success(function (data) {
                $scope.feed = data;
                console.log(data);
            })
        });
}());