(function () {
    'use strict';

    angular.module('app')
        .controller('MainController', ['$scope', 'currentUser', function ($scope, currentUser) {
            $scope.user = currentUser.user;

            $scope.appName = "Social Network Application";
        }]);
}());