app.factory('adsData', function adsData($http, $q, requester) {
	function getAllAds(success, error) {
		// You can move out requester logic with promises in other service and use it:
		// return requester('GET', 'http://softuni-ads.azurewebsites.net/api/ads');

		var deferred = $q.defer();
		var accesToken = "KeNSlHRM4YGHC9eXVc8RlGYO0pPrbjzocHgdifoN1qt5_iPSywNyq81lqwUuMLMqxqJdUrpnI9yO6Y5gXS8T0Gv_NHOqKHqrRJzXtPTzL1oNqBaWkenxi3FTLWJo9ENuBFtUXS_-DsbxIXYDd1Jc9zUkaPf2NSffgThGSmSLUGUjzxZOnrJPlodZAm06kobDl3Kgs9rwOPnIfTVhjM-Js3ftNCHE1Y1C17k7-CCISNps1b-_vxVLbK387NchCRR0nwt6I0nQNzx2Ixj1e0471ZfIE7-SP-2XyoyJ2fchzMLMsqtg0OZBQGgmgLqbYmmqKWS_yVVMlPFr_qqeAQmZ0CwD68YzrzrZe4VijE0XZFYDyOC9v2Ao58_V14GfuH87zQKOSwMbmmAcWG6-plJERlZ9RhN7_cY5hJ15yGwRdiKGo2vL9RsQ3zBsi3unnzvHfcaiJN9QMLKefQIugGAsguGx4ynNt6_87SiSf7IcQHsq_AcZaTZThkQ-Fgr_77F9";

		$http({
		    method: 'GET',
		    url: 'http://softuni-social-network.azurewebsites.net/api/users/John/wall?PageSize=5',
		    headers: { "Authorization": "Bearer " + accesToken }
		})
		.success(function (data, status, headers, config) {
			deferred.resolve(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			deferred.reject(data, status, headers(), config);
		});

		return deferred.promise;
	}

	return {
		getAds: getAllAds,
	}
})