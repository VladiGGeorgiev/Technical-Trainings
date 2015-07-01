var app = angular.module('app', ['ngResource']);

app.controller('mainController', function ($scope, dataService) {

});

app.controller('wallController', function ($scope, dataService) {
    $scope.data = dataService.getWall();

    $scope.$on('pageSizeChanged', function (event, pageSize) {
        dataService.getWallWithPageSize(pageSize)
            .success(function (data) {
                $scope.data = data;
            })
    })
});

app.controller('sidebarController', function ($scope, $rootScope, dataService) {
    $scope.pageSizeChanged = function (pageSize) {
        $rootScope.$broadcast('pageSizeChanged', pageSize);
    }
});