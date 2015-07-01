app.controller('NewAdController', function($scope, $location, $log, adsData) {
	$scope.addAd = function (ad) {
	    adsData.create(ad);
	    alert('Ad added: ' + data);
	    $location.path('#/allAds');
	}
});