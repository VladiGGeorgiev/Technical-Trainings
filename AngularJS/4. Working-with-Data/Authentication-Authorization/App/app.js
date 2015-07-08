(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'services.data', 'profileServicesMock'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: 'App/views/home.html',
                controller: 'MainController'
            });
            $routeProvider.when('/register', {
                templateUrl: 'App/views/register.html',
                controller: 'AuthController'
            });
            $routeProvider.when('/login', {
                templateUrl: 'App/views/login.html',
                controller: 'AuthController'
            });

            $routeProvider.when('/logout', {
                controller: 'AuthController'
            });

            $routeProvider.when('/profile', {
                templateUrl: 'App/views/profile.html',
                controller: 'ProfileController',
                access: {
                    authorize: true,
                    //roles: ['Admin', 'Moderator']
                }
            });
        })
        .run(function ($rootScope, $location, authorization) {
            $rootScope.$on('$routeChangeStart', function (event, next) {
                if (next && next.access && next.access.authorize) {
                    if (!authorization.isLoggedIn()) {
                        $location.path('/login');
                    }
                }
            })
        });
}());