app.controller('AllAdsController', function($scope, adsData) {
    $scope.data = adsData.getAll();
});