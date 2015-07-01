app.factory('adsData', function ($resource, $http) {
    $http.defaults.headers.common['Authorization'] = 'Bearer VBGTrSuJAAR0w_9u5ZBvCGr-oNnBFPbbC9OXheehmidzZyBvWXBU4mDvMd3he5wgK4jgyFJRG4fRowQRHEPQuRC3L35tI8uB2RmdkCv9eoCO5Sza9Vi6J9oBPdVA6_Afgho_l0Qqv1hqzg8UpumkK_Be9K2fyeWJR0gNTnzL801AvXRZnT17wyk-SUoIEp-BlOOws31caflDwkGrj7WPRR_VMOtksEi8WHKeCuqWBu2aT0k7e1fSbVvyCUhAFfBdzQ3obkuGzg2h19NpdF9RjtrhDIQP3bx7dfOqV3-eAV5wf7UQ7iQTqAinULIC1g0VAZe8AzgiSAstampg_gE_Kg05DiAfINKEpuMV02nsJA2aNzLEtaMDJb7Bjj8bdcz1StN_lFVb7HinCONkg2lrjp0gY-xg_JPkA4oMSxqRLD9u_6hPEbGtpCuaaZHy63Mn6db-HPUDOtZ86CG7ubqKvPEfOLZo3Ct1pkOqxGw36P4quVNOE30h4eEULI7C9kz1sJr5NGKcGt9LwICV6xHMJw';
	
	var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/user/ads/:id', 
		{id: '@id'}, 
		{ update: {
			method: 'PUT'
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