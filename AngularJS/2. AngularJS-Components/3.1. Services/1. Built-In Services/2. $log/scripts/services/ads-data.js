app.factory('adsData', function adsData($http) {
	function getAllAds(success, error) {
	    var accesToken = "mHATtNY_t4Zf9fsDbElhM-6kw3i1V8l95Ms6-gFjTq5uoF1YUgYkrFXG3VUtYauNAKNCjaRJXwLmukZ3oVJJfqJnM_HVwXJjAGlTev-U7RptA1mUKoEvXQWbG_9kq_MRS0Xcpc6R08krzldwQdOXa9mMVUnrVTO2RCm4_380ws9poagJ7YCCNiG7tPD0_4Q3g-UVQC3KOkrS8_xcWGxBxArj7FV0xcy2Hbvf5JgqvkRO9w4b_yFCHp0fdpY0rq2BFlhhzZpcsKvtslThkMipP4Aq_37whE3PkRztDhyWeZbIkHkUfCeQ39mYvKF4SSZNocSYhxKPZThYSmfpPcRbMoWilC3rsSR1S0ZcUoJ-G-1EG4AOkxEcaTDm2PyKHWRdRcF5au1imVT9tQoX70hr-i0BfOVpDqc3omqMuW7wmcHGZYL0EKFbc9BZC0AtLrq0zLEs_lGnXS_6qMoQT4opiburm74DEvnnZ45uRqVgHAs3psEOgA9ouZghzRNsSzcp";

	    $http({
	        method: 'GET',
	        url: 'http://softuni-social-network.azurewebsites.net/api/users/John/wall?PageSizes=5',
	        headers: { "Authorization": "Bearer " + accesToken }
	    })
		.success(function (data, status, headers, config) {
			success(data, status, headers, config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	return {
		getAds: getAllAds,
	}
})