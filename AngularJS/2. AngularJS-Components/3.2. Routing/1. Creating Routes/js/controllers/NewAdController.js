app.controller('NewAdController', function($scope, $location, $http) {
    $scope.defaultAdTitle = "C# Programming Book";

    $scope.addAd = function(ad) {
        $http({ method: 'post', data: ad })
            .onsuccess(function(data) {

            });
    }

    $scope.cancelAdd = function(parameters) {
        $location.redirectTo('/');
    }
});