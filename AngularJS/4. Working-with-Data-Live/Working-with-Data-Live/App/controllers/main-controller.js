(function () {
    'use strict';

    angular.module('app')
        .controller('MainController',
            ['$scope', 'currentUser', 'profileServices',
            function ($scope, currentUser, profileServices) {
            $scope.user = currentUser.user;

            $scope.name = currentUser.testMethod();

            $scope.appName = "Social Network Application";
            profileServices.getFeed(10)
                .success(function (data) {
                    console.log(data);
                    $scope.feed = data;
                });
        }]);
}());