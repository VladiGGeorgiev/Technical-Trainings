(function () {
    describe('During construction of the controller', function () {
        var scope, controller, authenticationMock, currentUserMock;
        
        beforeEach(function () {
            module('registrationModule');

            inject(function ($rootScope, $controller, $location, authentication, currentUser) {
                scope = $rootScope.$new();

                authenticationMock = sinon.stub(authentication);
                currentUserMock = sinon.stub(currentUser);

                controller = $controller('AuthController', { $scope: scope, $location: $location });
            });
        });

        it('Should set the courses from the repository', function () {

        });
    })
}());