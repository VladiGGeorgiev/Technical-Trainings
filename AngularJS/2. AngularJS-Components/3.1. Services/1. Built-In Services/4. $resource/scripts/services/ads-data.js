data.service('dataCacheFactory', function($http) {
    
});


data.factory('dataWorker', function ($resource) {
    return {
        name: "My Worker"
    }
});

app.factory('manager', function(cacheFactory, worker) {

    return {
        
    }
})



















app.factory('adsData', function adsData($resource) {
    var accessToken = "Te3zfIeAyXu5f2dKD_wD0tCUE2IWTMuUm4m3ffMEA-phsp00xwe_wbAuiM8xhqku-YJPG1RvGT4Nbg_F7BFqoiw_mMO-jN1Xydy6IBQ5Am8BMmOxu_W4l1Rcov61yQpGaWKbhCGkO_oubN_hUwNb53otCYOmf8LU9KMmrV02r2o9P9HFAK7D91jU0txq3RIEfz2xsSNQELMVhFpiU4pW0sP72lY2eXCEm5gGLhgKwATOLtbCyIvQfeOkA-aDROJKtFVjIpbuqA0tUaCLUCITC74rU-VLpA61CHXHRrRnl49v4oGPRKNC5e5ukCKmeH2onaB9Lj9EOIPFGegc7R86-6OTYOTba7_hc81HIqXy6LkXf3GDLtPGAP4SlvEmFKgr37IwFChMSmfU1o-v1c2BkD0RacLuG3vbL2Fr2zHPm0ywzU3LRWI-BinvrI4IvptJMhwYkBFODgcBhttcsdj81Kou3hrU16LZiOF0_57Dw8OCPPAp7_Doh4QSqooK3Jg1r2ZpdoQ_LzU9fij-BJmKvQ";

    var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/user/ads/:id', 
		{ id: '@id' }, 
		{
		    update: {
			    method: 'PUT'
		    },
            headers: {
                "Authorization": "Bearer " + accessToken
            }

	});

	function getAllAds() {
		return resource.get();
	}

	function createNewAd(ad) {
		return resource.save(ad);
	}

	function getAdById(id) {
		return resource.get({id: id});
	}

	function editAd(id, ad) {
		return resource.update({id: id}, ad);
	}

	function deleteAd(id) {
		return resource.delete({id: id});
	}

	return {
		getAll: getAllAds,
		create: createNewAd,
		getById: getAdById,
		edit: editAd,
		delete: deleteAd
	}
});