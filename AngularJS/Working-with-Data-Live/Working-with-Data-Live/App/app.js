(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'services.data'])
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                controller: 'MainController',
                templateUrl: '/App/templates/home.html'
            });
            $routeProvider.when('/register', {
                controller: 'AuthController',
                templateUrl: '/App/templates/register.html'
            });
            $routeProvider.when('/login', {
                controller: 'AuthController',
                templateUrl: '/App/templates/login.html'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        });
    
}());