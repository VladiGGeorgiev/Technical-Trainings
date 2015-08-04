(function () {
	describe('During construction of the controller', function () {
	    var scope,
            controller,
            profileServicesMock,
            currentUserMock,
            feed,
            _profileServices,
	        $httpBackend;

		beforeEach(function () {
			module('app');
			module('services.data');

			inject(function ($injector, $rootScope, $controller, currentUser, profileServices) {
			    $httpBackend = $injector.get('$httpBackend');
			    _profileServices = profileServices;
			    currentUserMock = currentUser;

			    feed = [
					{ postContent: "Hi hi hi", author: { username: 'Gosho' } },
					{ postContent: "Hello my friend", author: { username: 'Pesho' } },
					{ postContent: "You are amazing", author: { username: 'Minka' } },
					{ postContent: "Tra la la", author: { username: 'Peshka' } },
					{ postContent: "Where are you?", author: { username: 'Gechka' } },
					{ postContent: "Are you high?", author: { username: 'Donka' } },
			    ];

			    //authRequestHandler = $httpBackend.when('GET', 'http://localhost:49399/api/me/feed?PageSize=10').respond(feed);
			    authRequestHandler = $httpBackend.when('GET', /http:\/\/localhost:49399\/api\/me\/feed\?PageSize=*/).respond(feed);
			    
			    scope = $rootScope.$new();
				
				controller = $controller('MainController', { $scope: scope, profileServices: profileServices });
			});
		});

		it('Should set the feed from the repository', function () {
		    //$httpBackend.expectGET('http://localhost:49399/api/me/feed?PageSize=10');
		    $httpBackend.flush();

		    console.log(scope);
		    expect(scope.feed).toEqual(feed);
		});

		it('Should set the application name', function () {
		    expect(scope.appName).toBe("Social Network Application")
		});
        
		it('Should set the user', function () {
		    expect(scope.user).toBe(currentUserMock.user)
		});

		it('Spy test', inject(function () {
		    var spy = spyOn(_profileServices, 'getFeed');
		    //$httpBackend.flush();
		    _profileServices.getFeed();
		    expect(spy).toHaveBeenCalled();
		}));
	})
}());