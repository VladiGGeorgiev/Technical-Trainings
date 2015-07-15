(function () {
    'use strict';

    angular.module('app', ['tmh.dynamicLocale', 'pascalprecht.translate'])
        .config(function ($translateProvider, ) {
            $translateProvider.translations('en', {
                hi: 'Hello, Pesho!'
            });
            $translateProvider.translations('bg', {
                hi: 'Здрасти, Пешо!'
            });
            $translateProvider.preferredLanguage('en');
        })
        .controller('MainController', function ($scope, $translate, tmhDynamicLocale) {
            $scope.date = new Date();
            $scope.amount = 68000;

            $scope.lang = 'en';
            $scope.changeLang = function () {
                tmhDynamicLocale.set($scope.lang);
                $translate.use($scope.lang);
            }
        });
}());