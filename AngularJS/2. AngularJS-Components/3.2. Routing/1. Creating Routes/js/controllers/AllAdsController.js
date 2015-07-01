app.controller('AllAdsController', function($scope, adsData, $log) {
    $scope.ads = [
    {
        id: 1,
        title: "C# Programming Book",
        price: 12.38
    },
    {
        id: 2,
        title: "Laptop Dell Inspiron",
        price: 850
    }];
});