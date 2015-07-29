(function () {
    'use strict';

    angular.module('app', []);

    angular.module('app')
        .controller('MainController', function ($scope) {
            $scope.size = 16;
        });

    angular.module('app')
        .directive('fontSize', function ($parse) {
            return {
                link: function (scope, el, attrs) {
                    scope.$watch(attrs['fontSize'], function (newValue, oldValue) {
                        el.css('font-size', newValue + 'px')
                    })
                }
            }
        });
}());