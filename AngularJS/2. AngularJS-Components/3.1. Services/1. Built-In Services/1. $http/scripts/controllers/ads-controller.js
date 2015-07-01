app.controller('AdsController', function AdsController($scope, adsData) {
	adsData.getAds(
		function (data, status, headers, config) {
			$scope.data = data;
		}, 
		function (error, status, headers, config) {
			console.dir(status, error, headers, config); // Try with invalid url
		});
})