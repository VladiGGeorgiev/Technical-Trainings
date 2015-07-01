var app = angular.module('app', ['ngResource']);

app.controller('mainController', function ($scope, dataService) {
    $scope.data = dataService.getWall();

    $scope.pageSizeChanged = function (pageSize) {
        dataService.getWallWithPageSize(pageSize)
            .success(function (data) {
                $scope.data = data;
            })
    }
});