var app = angular.module('app', ['ngResource']);

app.controller('mainController', function ($scope, dataService) {
    $scope.data = {};
    $scope.pageSizeChanged = function (pageSize) {
        dataService.getWallWithPageSize(pageSize)
            .success(function (data) {
                $scope.data.wall = data;
            })
    }
});

app.controller('wallController', function ($scope, dataService) {
    $scope.data.wall = dataService.getWall();
});

app.controller('sidebarController', function ($scope, dataService) {
    
});