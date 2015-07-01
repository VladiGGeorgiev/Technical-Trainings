app.factory('adsData', function ($resource, $http) {
    var token = 'ByaNiIZALFCyeDJky49fITQ9u340tDh0FaUew_Yo1QXyQF4pFD2jaSM5AAw5TaE4IvN-BbTqbZONqLEm44wzh3FZ4bo6fwpNsl2b3REUTsu8BBSZxFzaIIXSeiPrpzzcHP51CM2l84H2GP1OQKdFlk7hoDHr4JFJm-4EKDd9-yyW-aRAAMaUv_tP7cH48CPt3Ob6_GrBbNYFDhXz-PZIAvpsuiK4N1IBdIAoCZpJJCEemy4DmXK4wQoRSsSAhMQSC8Eidki_amvGoGLWsEQ9E0IdUnZQo2eY7UbeQPC-hgMABEoi9HR6lbGN-T3m_3bTPbjGVizsWom0BTGhwatmUN5jYHN0duT4o_nHYAFcpbmyxDTH97DSVrJJdQabQ-gR941Xoyz8OwloTT54rKvFcSwgz94PVpN9iSC5l1X-hA1Z9u1Qy29jexoTkj6Sv8-LHV3yTIXewjSwUivS8Tr49czXRSdhP8YSjt2pd2lfhtAMMRe332mBQu2iwJqm4Ffp5aN6TxYUZz3Ip8nuLSyKgQ';
	
	var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/user/ads/:id', 
		{id: '@id'}, 
		{
		    update: {
			    method: 'PUT'
		    },
            headers: {
                "Authorization": "Bearer " + token
            }
		}
    );

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