(function () {
    describe('Main Tests', function () {
        var globalUser;
        beforeEach(function () {
            module('app');
            module('services.data');
            inject(function (currentUser) {
                globalUser = currentUser;
                console.log('Called');
            });
        });
        
        describe('Main Controller Tests', function () {
            var scope,
                controller,
                currentUserMock,
                httpBackend,
                _profileServices,
                feed = [
                    { postContent: "Hi hi hi", author: { username: 'Gosho' } },
                    { postContent: "Hello my friend", author: { username: 'Pesho' } },
                    { postContent: "You are amazing", author: { username: 'Minka' } },
                    { postContent: "Tra la la", author: { username: 'Peshka' } },
                    { postContent: "Where are you?", author: { username: 'Gechka' } },
                    { postContent: "Are you high?", author: { username: 'Donka' } },
                ];

            beforeEach(function () {
                inject(function ($rootScope, $injector, $controller, currentUser, profileServices) {
                    httpBackend = $injector.get('$httpBackend');
                    currentUserMock = currentUser;
                    _profileServices = profileServices;

                    angular.mock.module

                    //authRequestHandler = $httpBackend.when('GET', 'http://localhost:49399/api/me/feed?PageSize=10').respond(feed);
                    authRequestHandler = httpBackend.when('GET', /http:\/\/localhost:49399\/api\/me\/feed\?PageSize=*/).respond(feed);

                    currentUser.user = {
                        token: '',
                        username: '',
                        isLoggedIn: true
                    }

                    scope = $rootScope.$new();
                    controller = $controller('MainController', { $scope: scope, currentUser: currentUser });
                })
            })

            it('Should get logged in user', function () {
                expect(scope.user.isLoggedIn).toBe(true);
                console.log('User');
                console.log(globalUser);
            })

            it('Name should be gosho', function () {
                expect(scope.name).toBe('Gosho');
            })

            it('Should set the application name', function () {
                expect(scope.appName).toBe("Social Network Application")
            });

            it('Should set the user', function () {
                expect(scope.user).toBe(currentUserMock.user);
            });

            it('Should set the feed from the repository', function () {
                //$httpBackend.expectGET('http://localhost:49399/api/me/feed?PageSize=10');
                httpBackend.flush();

                console.log(scope);
                expect(scope.feed).toEqual(feed);
            });

            //it('Spy test', inject(function () {
            //    var spy = spyOn(_profileServices, 'getFeed');
            //    //$httpBackend.flush();
            //    _profileServices.getFeed();
            //    expect(spy).toHaveBeenCalled();
            //}));
        });
    });
}());