app.factory('adsData', function ($resource, $http) {
    var ads = [
    {
        id: 1,
        title: "C# Programming Book",
        price: 12.38
    },
    {
        id: 2,
        title: "Laptop Dell Inspiron",
        price: 850
    },
    {
        id: 3,
        title: "Kucheto na Pesho",
        price: 200
    }];

	function getAllAds() {
		return ads;
	}

	function createNewAd(ad) {
		return ads.push(ad);
	}

	function getAdById(id) {
		return ads.filter(function(ad) {
		    return ad.id == id;
		})[0];
	}

	return {
		getAll: getAllAds,
		create: createNewAd,
		getById: getAdById,
	}
});